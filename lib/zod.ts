import { object, string, z } from "zod";

export const RegisterSchema = object({
  name: string().min(3, "Name must be more than 1 character"),
  email: z.email("Invalid email address"),
  password: string()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be less than 20 characters long"),
  confirmPassword: string()
    .min(6, "Confirm Password must be at least 6 characters long")
    .max(20, "Confirm Password must be less than 20 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const LoginSchema = object({
  email: z.email("Invalid email address"),
  password: string()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be less than 20 characters long"),
});
