import mongoose from "mongoose";


const movieSchema = new mongoose.Schema({
    name:String,
    description:String,
    rating:Number,
    imageUrl:String,
},{timestamps:true});

export default  mongoose.models.Movie || mongoose.model("Movie", movieSchema);