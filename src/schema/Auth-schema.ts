import { z } from "@hono/zod-openapi";

export const AuthSchema = z.object({
  email: z.string().email(),

  //TODO add password regex
  //   password: z.string().min(8).regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/),});

  password: z.string().min(8),
});
