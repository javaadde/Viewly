import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const dbHost= process.env.MONGO_URi;

export async function dbConnect(){
try{
    await mongoose.connect(dbHost!)
}
catch(err){
console.log(err);

}

}