import { z } from "@hono/zod-openapi";

export const AuthSchema = z.object({
  email: z.string().email(),

  //TODO add password regex
  //   password: z.string().min(8).regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/),});

  password: z.string().min(8),
});

export const SignInSchemaResponse = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
      message:
        "Password must contain at least one uppercase letter, one number, and one special character",
    }),
});
