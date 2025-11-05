import React, { useEffect } from 'react';
import axios from 'axios';
import { Star, Film, MessageSquare, Sparkles } from 'lucide-react'; 
import { Movie } from '@/types/Movie.type';
import { Review } from '@/types/Review.type';


async function getMovieDetails(id: string):Promise<Movie> {
  
   const fullUrl = `http://localhost:3000/api/movie/findOne/${id}`;
   const res = await axios.get(fullUrl);
    return res.data;
}



// Mock function to get reviews (in a real app, this would be part of your API)
async function getMovieReviews(movieId: string) {
  return [
    { _id: 1, movieId:'', username: "CinePhile101", comment: "Absolutely mind-bending! Nolan's best work since The Dark Knight. The visuals were stunning." },
    { _id: 2, movieId:'', username: "MovieFanatic", comment: "I was a bit confused at times, but the ending made it all worth it. DiCaprio was fantastic as always." },
    { _id: 3, movieId:'', username: "CasualViewer", comment: "Great movie. A bit long, but it kept my attention. 8/10." },
  ];
}



export default async function MovieDetailsPage({ params }: { params: Promise<{ movieId: string }> }) {


  const { movieId } = await params;
  const movie: Movie = await getMovieDetails(movieId);
  const reviews: Review[] = await getMovieReviews(movieId);
  

  




  // This would be a server action in a real Next.js 14 app
  async function handleReviewSubmit(formData: FormData) {
    'use server';

    const reviewText = formData.get('reviewText');
    
   
  }

  

  return (
    <div className="min-h-screen bg-gray-950 comment-white">
      {/* Simplified Hero / Main Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Poster */}
          <div className="flex-shrink-0">
            <img 
              src={movie.imageUrl} // Use imageUrl from schema
              alt={movie.name}     // Use name from schema
              className="w-64 md:w-80 rounded-lg shadow-2xl border-4 border-gray-800 mx-auto"
            />
          </div>

          {/* Movie Info */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 fill-yellow-400 comment-yellow-400" />
              <span className="font-bold comment-2xl">{movie.rating}</span>
              <span className="text-gray-400 comment-lg">/ 10</span>
            </div>

            {/* Overview/Description */}
            <section className="mb-8">
               <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                 <Film className="w-8 h-8 comment-blue-500" />
                 Overview
               </h2>
               <p className="text-lg comment-gray-300 leading-relaxed max-w-4xl">
                 {movie.description} {/* Use description from schema */}
               </p>
            </section>

            {/* ACTION BUTTONS REMOVED AS REQUESTED */}

          </div>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="border-b border-gray-800 max-w-7xl mx-auto"></div>

      {/* NEW Review Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-4 md:mb-0">
              <MessageSquare className="w-8 h-8 comment-blue-500" />
              Reviews & Comments
            </h2>
            
            {/* Summarize Button */}
            <button 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg"
              // onClick={handleSummarize} // This would need to be a client component
            >
              <Sparkles className="w-5 h-5" />
              Summarize Reviews with AI
            </button>
          </div>

          {/* Submit Review Form (Server Action) */}
          <form action={handleReviewSubmit} className="mb-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Leave a Review</h3>
            <textarea
              name="reviewText"
              className="w-full h-24 p-3 bg-gray-800 rounded-md border border-gray-700 comment-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What did you think of the movie?"
              required
            ></textarea>
            <button 
              type="submit" 
              className="mt-3 px-6 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Submit Review
            </button>
          </form>

          {/* Existing Reviews List */}
          <div className="space-y-6">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review._id} className="p-5 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h4 className="font-bold comment-lg comment-blue-400 mb-1">{review.username}</h4>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Be the first to leave a review!</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}