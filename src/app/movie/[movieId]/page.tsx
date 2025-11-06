'use client';
import { useEffect ,useRef,useState} from 'react';
import axios from 'axios';
import { Star, Film, MessageSquare, Sparkles } from 'lucide-react'; 
import { Movie } from '@/types/Movie.type';
import { Review } from '@/types/Review.type';
import {toast, ToastContainer} from 'react-toastify';
import { useParams } from 'next/navigation';




export default  function MovieDetailsPage() {


  const params = useParams();
  const { movieId } =  params;
  const [refetchReviews, setRefetchReviews] = useState(false);

  const [movie, setMovie] = useState<Movie>({
    _id: '',
    name: 'movie',       
    description: '',
    rating: 0,
    imageUrl: 'image',
  });

  const [reviews, setReviews] = useState<Review[]>([]);
  const [username, setUsername] = useState(null); // Placeholder username 
  const [textarea, setTextarea] = useState(''); // State for textarea value
 

  useEffect(() => {


    const fetchDatas = async () => {
        const res = await axios.get(`/api/movie/findOne/${movieId}`);
        setMovie(res.data);
    }

    axios.get('/api/user').then(response => {
      if (response.data.user) {
        setUsername(response.data.user.username);
        console.log("User data:", response.data.user.username);
      }
    }).catch(error => {
      console.error('Error fetching user data:', error);
    });

     fetchDatas();

  }, []);


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`/api/review/get/${movieId}`);  
        setReviews(res.data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [refetchReviews]);



  // This would be a server action in a real Next.js 14 app
  async function handleReviewSubmit() {
     
      if(!username){
        toast.error("You must be logged in to submit a review.");
        return;
      }
    
      
      if (textarea === null) {
        toast.error("Review text cannot be empty.");
        return;
      }      
      
      const res =  await axios.post('/api/review/add', {
        movieId: movieId,
        username: username, 
        comment: textarea,
      });

      toast.success(res.data.message);
      setRefetchReviews(!refetchReviews);
  
  }

  

  return (
    <div className="min-h-screen bg-gray-950 comment-white">

      <ToastContainer />

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
            
            {/* Summarize Button
            <button 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg"
              // onClick={handleSummarize} // This would need to be a client component
            >
              <Sparkles className="w-5 h-5" />
              Summarize Reviews with AI
            </button> */}
          </div>

          {/* Submit Review Form (Server Action) */}
          <form action={handleReviewSubmit} className="mb-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Leave a Review</h3>
            <textarea
              onChange={(e)=>{setTextarea(e.target.value)}}
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