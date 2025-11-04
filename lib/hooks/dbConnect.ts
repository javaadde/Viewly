import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbHost = process.env.MONGODB_URI;

export async function dbConnect() {
  try {
    console.log(dbHost)
    await mongoose.connect(dbHost!);
  } catch (err) {
    console.log(err);
  }
}
