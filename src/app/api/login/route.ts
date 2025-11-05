import Users from '../../../models/model.user';
import bcrypt from 'bcrypt';
import { dbConnect } from '../../../lib/dbConnect';
import { NextRequest, NextResponse } from 'next/server';
import {getSession} from '@/lib/session';


export async function POST(req: NextRequest) { 
    try {
        const body = await req.json();
        const { email, password } = body;
        
        await dbConnect();
        const user = await Users.findOne({ email: email });
        
        if (!user) {
            return NextResponse.json(
                { error: "User not found, please sign up first" },
                { status: 404 }
            );
        }
        
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }
        
        // Get session using iron-session directly
       
        const session = await getSession();
        
        // Set session data
        session.user = {
            id: user._id.toString(),
            username: user.username,
            email: user.email
        };
        
        // Save session
        await session.save();
        
        // Return response
        return NextResponse.json({
            success: true,
            message: `Welcome back ${user.username}`,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
        
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}