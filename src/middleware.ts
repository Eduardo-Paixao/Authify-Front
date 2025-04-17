import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "./utils/generic";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || "";

  const decoded = decodeJwt(token);

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (decoded && decoded.user.roles[0].name !== "admin" && req.url.match('/private/addUser')) {
    return NextResponse.redirect(new URL("/private/userList", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/private/:path*"],
};
