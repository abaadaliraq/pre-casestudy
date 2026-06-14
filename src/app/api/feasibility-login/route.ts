import { NextResponse } from "next/server";

const ACCESS_COOKIE = "kishib_feasibility_access";

export async function POST() {
  const response = NextResponse.json({ ok: true });

  response.cookies.set(ACCESS_COOKIE, "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}