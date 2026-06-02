import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicPath =
    pathname === "/login" ||
    pathname.startsWith("/api/presentation-login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    PUBLIC_FILE.test(pathname);

  if (isPublicPath) {
    return NextResponse.next();
  }

  const accessCookie = request.cookies.get("kishib_presentation_access")?.value;

  if (accessCookie === "granted") {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("from", pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};