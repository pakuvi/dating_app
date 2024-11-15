import { Hono } from "hono";
import { handle } from "hono/vercel";

import signIn from "@/feature/auth/server/route";
export const runtime = "edge";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/signIn", signIn);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
