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
        return user;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isAuthorized = !!auth?.user;
      const ProtectedRoutes = ["/dashboard", "/user", "/product"];
      // jika user belum login dan mengakses halaman protected route
      if (!isAuthorized && ProtectedRoutes.includes(nextUrl.pathname)) {
        // maka akan diarahkan ke halaman login
        return Response.redirect(new URL("/login", nextUrl));
      }
      // jika user sudah login dan mengakses halaman login
      if (isAuthorized && nextUrl.pathname.startsWith("/login")) {
        // maka akan diarahkan ke halaman dashboard
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
});
