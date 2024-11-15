// books.ts

import User from "@/schema/user";
import { Hono } from "hono";

// const app = new Hono().post(
//   "/",
//   zValidator("json", SignInSchemaResponse),
//   async (c) => {
//     const { email, password } = await c.req.json();

//     const user = await User.findOne({ email });

//     if (user) return c.json({ message: "User already exist" }, 404);

//     const Passwordhash = await bcrypt.hash(
//       password,
//       process.env.NEXT_PUBLIC_SALT_ROUNDS!
//     );

//     const res = await User.create({
//       email,
//       password: Passwordhash,
//     });

//     if (res?._id) {
//       // const token = TokenMaker(res._id.toString(), res.email);

//       const data = { email: res.email };

//       return c.json({ message: "User created successfully", data }, 201);
//     }
//   }
// );

const app = new Hono().post("/", async (c) => {
  const { email, password } = await c.req.json();

  const user = await User.findOne({ email });

  if (user) return c.json({ message: "User already exist" }, 404);
  console.log("hello");

  return c.json({ message: "User created successfully" }, 201);
});

export default app;
