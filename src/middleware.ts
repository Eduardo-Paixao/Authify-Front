import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || ''; 

  if (!token && req.nextUrl.pathname.startsWith("/userList")) {
    
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

// Define quais rotas o middleware deve afetar (opcional)
export const config = {
  matcher: ["/userList"], // Aplica o middleware para todas as subrotas de "/dashboard"
};
