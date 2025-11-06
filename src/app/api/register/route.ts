import { NextResponse } from "next/server";
import Users from "../../../models/model.user";
import bcrypt from "bcrypt";
import { dbConnect } from "../../../lib/dbConnect";
import { getSession } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email, password } = body;
    await dbConnect();

    const hashedPassword = bcrypt.hashSync(password, 10);
    const {_id} = await Users.create({
      username: fullName,
      email: email,
      password: hashedPassword,
    });

            const session = await getSession();
           
            // Set session data
            session.user = {
                id:_id,
                username:fullName,
                email: email,
                role: "user",
            };
            
            // Save session
            await session.save();


            console.log(session);
            

    return new Response(`account created for ${email}`);
  } catch (error) {
    console.error(error);
    if (error === "object") {
        if((error as any).code === 11000){
          return new Response("user is allready exist");
        }
    }
    return new Response("error occured during registration");
  }
}
