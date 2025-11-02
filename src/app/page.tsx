import Navbar from "../../components/Navbar";
import MovieSlider from "../../components/MovieSlider";

const newReleases = [
  { title: "Venom 2", posterPath: "/venom2.jpg", releaseDate: "2023-11-01", voteAverage: 8.5 },
  { title: "Spider-Man", posterPath: "/venom3.jpg", releaseDate: "2023-10-15", voteAverage: 9.0 },
  { title: "Black Panther", posterPath: "/venom1.jpg", releaseDate: "2023-10-20", voteAverage: 8.8 },
  { title: "Thor", posterPath: "/venom2.jpg", releaseDate: "2023-09-28", voteAverage: 8.2 },
  { title: "Iron Man", posterPath: "/venom3.jpg", releaseDate: "2023-10-05", voteAverage: 9.2 },
  { title: "Avengers", posterPath: "/venom1.jpg", releaseDate: "2023-10-10", voteAverage: 9.5 }
];

const trending = [
  { title: "Dune", posterPath: "/venom2.jpg", releaseDate: "2023-08-15", voteAverage: 9.3 },
  { title: "Batman", posterPath: "/venom3.jpg", releaseDate: "2023-07-20", voteAverage: 8.9 },
  { title: "Superman", posterPath: "/venom3.jpg", releaseDate: "2023-09-01", voteAverage: 8.7 },
  { title: "Wonder Woman", posterPath: "/venom3.jpg", releaseDate: "2023-08-25", voteAverage: 8.6 },
  { title: "Aquaman", posterPath: "/venom3.jpg", releaseDate: "2023-09-10", voteAverage: 8.4 },
  { title: "Flash", posterPath: "/venom3.jpg", releaseDate: "2023-08-30", voteAverage: 8.8 }
];

const greatestOfAllTime = [
  { title: "The Godfather", posterPath: "/venom2.jpg", releaseDate: "1972-03-24", voteAverage: 9.8 },
  { title: "Pulp Fiction", posterPath: "/venom3.jpg", releaseDate: "1994-10-14", voteAverage: 9.7 },
  { title: "Shawshank Redemption", posterPath: "/venom3.jpg", releaseDate: "1994-09-23", voteAverage: 9.9 },
  { title: "The Dark Knight", posterPath: "/venom3.jpg", releaseDate: "2008-07-18", voteAverage: 9.6 },
  { title: "Fight Club", posterPath: "/venom3.jpg", releaseDate: "1999-10-15", voteAverage: 9.5 },
  { title: "Matrix", posterPath: "/venom3.jpg", releaseDate: "1999-03-31", voteAverage: 9.4 }
];

export default function Home() {
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

        {/* Trending Section */}
        <div id="trending" className="space-y-6">
         <div className="px-5 py-13 flex justify-center items-center flex-col">
            <h2 className="text-xl px-8 py-4 bg-[#272727] rounded-full font-bold text-white">Trending</h2>
            <p className="text-gray-400 mt-2">Most watched movies in this week</p>
          </div>
          <MovieSlider movies={trending} />
        </div>

        {/* Greatest of All Time Section */}
        <div id="goat" className="space-y-6 py-12 pb-19">
         <div className="px-5 py-12 flex justify-center items-center flex-col">
            <h2 className="text-xl px-8 py-4 bg-[#272727] rounded-full font-bold text-white">Greates Of All Time</h2>
            <p className="text-gray-400 mt-2">Timeless classics and fan favorites</p>
          </div>
          <MovieSlider movies={greatestOfAllTime} />
        </div>
    </section>


     <section id="footer" className="h-63 w-full bg-gray-700" >
       
     </section>

    </>
  );
}
