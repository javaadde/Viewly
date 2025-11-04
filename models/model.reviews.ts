import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.Types.ObjectId, ref: "Movie"
    },
    username:String,
    comment:String,
    stars:Number,

},{timestamps:true})

export default mongoose.model("Review", reviewSchema);
