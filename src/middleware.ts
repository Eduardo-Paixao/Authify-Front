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

  if (!token || !decoded || decoded.exp * 1000 < Date.now()) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/private/:path*"],
};
