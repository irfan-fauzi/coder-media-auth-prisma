"use server";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { LoginSchema, RegisterSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { signIn } from "@/auth";

// Register
export const signupCredential = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedField = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedField.success) {
    const filedErrors = validatedField.error.flatten().fieldErrors;
    return {
      values: {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        password: formData.get("password") || "",
        confirmPassword: formData.get("confirmPassword") || "",
      },
      error: {
        name: filedErrors.name || [],
        email: filedErrors.email || [],
        password: filedErrors.password || [],
        confirmPassword: filedErrors.confirmPassword || [],
      },
    };
  }
  const { name, email, password } = validatedField.data;

  // if email already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return {
      values: {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        password: formData.get("password") || "",
        confirmPassword: formData.get("confirmPassword") || "",
      },
      error: {
        name: [],
        email: ["Email already exists"],
        password: [],
        confirmPassword: [],
      },
    };
  }

  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    // redirect to login page
  } catch (error) {
    throw new Error(`Failed to create user: ${error}`);
  }
  redirect("/login");
};

// Login------------------------------------------------------
export const loginCredential = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedField = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedField.success) {
    const filedErrors = validatedField.error.flatten().fieldErrors;
    return {
      values: {
        email: formData.get("email") || "",
        password: formData.get("password") || "",
      },
      error: {
        email: filedErrors.email || [],
        password: filedErrors.password || [],
      },
    };
  }
  const { email, password } = validatedField.data;
  try {
    await signIn('credentials', {email, password, redirectTo: "/dashboard"})
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {message: "Invalid Credentials"}
        default:
          return {message: "Unknown error"}
      }
    }
    throw error
  }
};
