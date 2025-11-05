import Movie from "../../../../models/model.movie";
import { dbConnect } from "../../../../lib/dbConnect";

export async function GET(req: Request) {
  try {
    
    await dbConnect();
    const movie = await Movie.find();
    return new Response(JSON.stringify(movie), { status: 200 });
    } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  } 
}
