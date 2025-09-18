import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";

export const fetchUsers = async () => {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    redirect("/");
  }
  try {
    const users = await prisma.user.findMany();
    return { data: users, error: null };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) { 
      return { data: null, error: error.message };
    }
    return { data: null, error: "ada kesalahan pada saat pengambilan data users" };
  }
};
