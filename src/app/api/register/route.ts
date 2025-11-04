import { NextResponse } from "next/server";
import Users from "../../../../models/model.user";
import bcrypt from "bcrypt";
import { dbConnect } from "../../../../lib/hooks/dbConnect";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email, password } = body;
    await dbConnect();

    const hashedPassword = bcrypt.hashSync(password, 10);
    await Users.create({
      username: fullName,
      email: email,
      password: hashedPassword,
    });

    return new Response(`account created for ${email}`);
  } catch (error) {
    console.error(error);
    if (typeof error === "object") {
      return new Response("user is allready exist");
    }
    return new Response("error occured during registration");
  }
}
