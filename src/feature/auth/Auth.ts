import { ErrorResponse } from "@/Error/Error-Responce";
import User from "@/schema/user";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";

import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (
        credentials
      ): Promise<Partial<Record<string, unknown>>> => {
        if (!credentials?.email || !credentials?.password) {
          return ErrorResponse({
            status: 401,
            message: "Invalid credentials",
          });
        }

        try {
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            return ErrorResponse({
              status: 400,
              message: "User not dose exist",
            });
          }

          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (!isValid) {
            return ErrorResponse({
              status: 400,
              message: "Password is incorrect",
            });
          }

          if (!user.isActive) {
            return ErrorResponse({
              status: 404,
              message: "User is not active",
            });
          }

          return {
            id: user._id,
            email: user.email,
          };
        } catch (error) {
          console.log("🚀 ~ error:", error);
          return ErrorResponse({
            status: 401,
            message: "something went wrong",
          });
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
});
