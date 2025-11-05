import Movie from "../../../../../models/model.movie";
import { dbConnect } from "../../../../../lib/dbConnect";



export async function GET(req: Request, context: { params: { id: string } }) {
    try {
        const resolvedParams = await context.params; 
        const { id } = resolvedParams;
       
        await dbConnect();
        const movie = await Movie.findOne({ _id:id});
        if (!movie) {
            return new Response("Movie not found", { status: 404 });
        }   
        return new Response(JSON.stringify(movie), { status: 200 });
    }
    catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
