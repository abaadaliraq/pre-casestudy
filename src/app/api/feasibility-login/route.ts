import { NextResponse } from "next/server";

const ACCESS_COOKIE = "kishib_feasibility_access";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = String(body.password || "");
    const correctPassword = process.env.KISHIB_FEASIBILITY_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json(
        { ok: false, message: "Password is not configured." },
        { status: 500 }
      );
    }

    if (password !== correctPassword) {
      return NextResponse.json(
        { ok: false, message: "Wrong password." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ ok: true });

    response.cookies.set(ACCESS_COOKIE, "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}
