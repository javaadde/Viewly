import Users from '../../../../models/model.user';
import bcrypt from 'bcrypt';
import { dbConnect } from '../../../../lib/hooks/dbConnect';

export async function POST(req:Request) {
    try {
        
       const body = await req.json()
       const { email, password } = body;
       await dbConnect()

       const user = await Users.findOne({email:email})
         if(!user){
            return new Response("user not found please singup first")
         }

       const isPasswordValid = bcrypt.compareSync(password, user.password);

       if(isPasswordValid){
        return new Response(`welcome back ${user.username}`)
       }

    } catch (error) {
        console.error(error)
    }
}