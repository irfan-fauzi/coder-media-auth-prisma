"use server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";

export const signupCredential = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedField = RegisterSchema.safeParse(Object.fromEntries(formData));
  if (!validatedField.success) {
    return { error: validatedField.error.flatten().fieldErrors };
  }
  const { name, email, password } = validatedField.data;
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
    return { error: `${error} User already exists` };
  }
  redirect("/login");
};

/*
.safeParse()

Sebaliknya, metode .safeParse() akan mengembalikan (return) sebuah objek hasil (result object) yang menunjukkan apakah validasi berhasil atau gagal. Metode ini tidak akan melemparkan kesalahan, sehingga Anda tidak perlu menggunakan blok try...catch. Objek hasil yang dikembalikan memiliki dua properti utama: success dan data atau error.

--------------------------------------------------------------------
.parse()

Metode .parse() akan melemparkan (throw) sebuah kesalahan (error) jika validasi gagal. Hal ini berarti, jika data yang Anda berikan tidak sesuai dengan skema Zod, program Anda akan berhenti dan Anda harus menggunakan blok try...catch untuk menangkap kesalahan tersebut.

*/
