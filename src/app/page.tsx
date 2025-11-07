
import Navbar from "../components/Navbar";
import MovieSlider from "../components/MovieSlider";
import axios from "axios";


async function fetchNewReleases() {
  const baseUrl = process.env.BASE_URL;
  try {
    const response = await axios.get(`${baseUrl}/api/movie/find`);
    return response.data
  } catch (error) {
    console.error('Error fetching new releases:', error);
    return [];
  }
} 

export default async function Home() {
  
  
  const newReleases = await fetchNewReleases();

  return (
    <>

    <section id="home" className="min-h-screen pt-8 w-full font-offside">
       <Navbar/>
    </section>
  
    <section id="new" className="min-h-screen space-y-16 py-16">
        {/* New Releases Section */}
        <div className="space-y-6 py-12 ">
          <div className="px-5 py-3 flex  justify-center items-center flex-col">
            <h2 className="text-xl px-8 py-4 bg-[#272727] rounded-full font-bold text-white">New Releases</h2>
            <p className="text-gray-400 mt-2">The latest movies added to our collection</p>
          </div>
          <MovieSlider movies={newReleases} />
        </div>

       
        <div id="trending" className="space-y-6">
         <div className="px-5 py-13 flex justify-center items-center flex-col">
            <h2 className="text-xl px-8 py-4 bg-[#272727] rounded-full font-bold text-white">Trending</h2>
            <p className="text-gray-400 mt-2">Most watched movies in this week</p>
          </div>
          <MovieSlider movies={newReleases} />
        </div>

        {/* Greatest of All Time Section */}
        <div id="goat" className="space-y-6 py-12 pb-19">
         <div className="px-5 py-12 flex justify-center items-center flex-col">
            <h2 className="text-xl px-8 py-4 bg-[#272727] rounded-full font-bold text-white">Greates Of All Time</h2>
            <p className="text-gray-400 mt-2">Timeless classics and fan favorites</p>
          </div>
          <MovieSlider movies={newReleases} />
        </div>

     <footer id="footer" className="h-63 w-full bg-[#1e1d1de8]" > </footer>


    </section>



    </>
  );
}
