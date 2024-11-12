// books.ts
import { Hono } from "hono";

const app = new Hono().get("/", (c) => c.json("list books"));

export default app;
