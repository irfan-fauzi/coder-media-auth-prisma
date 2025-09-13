import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/zod";
import { compareSync } from "bcrypt-ts";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedField = LoginSchema.safeParse(credentials);
        if (!validatedField.success) {
          return null; // ini akan memicu error credential login
        }
        const { email, password } = validatedField.data;
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user || !user.password) {
          throw new Error("No user found");
        }
        const isPasswordValid = compareSync(password, user.password);
        if (!isPasswordValid) return null; // ini akan memicu error credential login
        return user
      },
    }),
  ],
});
