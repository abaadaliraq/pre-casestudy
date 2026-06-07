import { NextRequest, NextResponse } from "next/server";

const FEASIBILITY_ACCESS_COOKIE = "kishib_feasibility_access";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname === "/feasibility/login" ||
    pathname.startsWith("/api/feasibility-login")
  ) {
    return NextResponse.next();
  }

  const accessCookie = request.cookies.get(FEASIBILITY_ACCESS_COOKIE)?.value;

  if (accessCookie === "true") {
    return NextResponse.next();
  }

  const loginUrl = new URL("/feasibility/login", request.url);
  loginUrl.searchParams.set("from", `${pathname}${search}`);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/feasibility/:path*"],
};
