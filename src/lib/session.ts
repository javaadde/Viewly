import { SessionData } from '@/interfaces/SessionData.interface';
import { SessionConfig } from '@/config/session.config';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';


export async function getSession() {
   
    const cookieStore = await cookies() as any;
    return getIronSession<SessionData>(cookieStore, SessionConfig);

}
 