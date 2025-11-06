import { dbConnect } from "@/lib/dbConnect";
import { getSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import Movies from "@/models/model.movie";

export async function POST(req: NextRequest) {
    try {
        const session = await getSession();
        if (!session.user || session.user.role !== "admin") {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }   
        const body = await req.json();
        const { name, description, rating, imageUrl } = body;
        await dbConnect();
        const newMovie = new Movies({
            name,
            description,
            rating,
            imageUrl
        });
        await newMovie.save();
        return NextResponse.json(
            { success: true, message: "Movie added successfully", movie: newMovie },
            { status: 201 }
        );
    }
    catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "An error occurred while adding the movie" },
            { status: 500 }
        );
    }
}
