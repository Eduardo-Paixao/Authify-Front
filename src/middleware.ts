import { NextRequest, NextResponse } from "next/server";

function decodeJwt(token: string) {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || "";

  const decoded = decodeJwt(token);

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (decoded && decoded.user.roles[0].name !== "admin") {
    return NextResponse.redirect(new URL("/private/userList", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/private/:path*"],
};
