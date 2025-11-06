import { getSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";


export async function middleware(req: NextRequest) {
    const session = await getSession();

    // const session = {user: {
    // id: "mockId",
    // username: "mockUser",
    // email: "",
    // role: "user",
    // }}; 

    // console.log("Middleware session:", session);

    if (session.user && session.user.role === "admin") {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL('/admin/login', req.url));
    }   
}

export const config = {
    matcher: [
        '/admin/dashboard',
        '/admin/dashboard/(.*)',
    ],
};