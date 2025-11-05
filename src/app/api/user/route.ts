import { NextRequest , NextResponse} from "next/server";
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import dotenv from 'dotenv'
dotenv.config();

interface SessionData {
    user?: {
        id: string;
        username: string;
        email: string;
    };
}


export async function GET(req:NextRequest){

    try{
      const cookieStore = await cookies();
        const session = await getIronSession<SessionData>(cookieStore, {
            password: process.env.SESSION_SECRET!,
            cookieName: "app-session",
            cookieOptions: {
                secure: process.env.NODE_ENV === "production",
                httpOnly: true,
                sameSite: "lax",
            },
        });

        console.log(session.user);
        
      
          // Return the session data
        return NextResponse.json({
            user: session.user
        });


    }
    catch(err){
        console.log(err)
    }
}