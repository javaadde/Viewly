import {dbConnect} from "@/lib/dbConnect";
import Review from "@/models/model.reviews";


export async function GET(request: Request,context: { params: { id: string } }) {
    
    try {

        const resolvedParams = await context.params; 
        const { id } = resolvedParams;
        console.log("Fetching reviews for movieId:", id);
        await dbConnect();
        const data = await Review.find({ movieId: id });
        return new Response(JSON.stringify({ reviews: data }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to fetch reviews", error }), { status: 500 });
    }   
}
