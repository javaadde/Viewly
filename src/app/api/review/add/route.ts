import { dbConnect } from "@/lib/dbConnect";
import Review from "@/models/model.reviews";


export async function POST(request: Request) {
    
    try {
        await dbConnect();
        const { movieId, username, comment } = await request.json();
        console.log(movieId, username, comment);
        const newReview = new Review({ movieId, username, comment });
        await newReview.save();
        return new Response(JSON.stringify({ message: "Review added successfully", review: newReview }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to add review", error }), { status: 500 });
    }   
}