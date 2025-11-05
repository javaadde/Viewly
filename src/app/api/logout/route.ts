import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { dbConnect } from '@/lib/dbConnect';





export async function DELETE(req: Request) {
   try {
    
        await dbConnect();
        
        const session = await getSession();
        // Destroy the session
        await session.destroy();

        // Return a success response
        return NextResponse.json({ message: 'Logged out successfully' });
    
   } catch (error) {
    console.log(error);
    
   }
}
