import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.Types.ObjectId, ref: "Movie"
    },
    username:String,
    comment:String,
    
},{timestamps:true})

export default  mongoose.models.Review || mongoose.model("Review", reviewSchema);
