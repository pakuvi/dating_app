import { Hono } from "hono";
import { handle } from "hono/vercel";

import books from "@/feature/auth/server/route";

export const runtime = "edge";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/books", books);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
