import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = String(body.password || "");

    const correctPassword = process.env.PRESENTATION_PASSWORD;

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

    response.cookies.set("kishib_presentation_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}