'use client';

import React, { useRef, useState, useEffect } from 'react'; // ADDED useState, useEffect
import MovieCard from './MovieCard';

interface Movie {
  _id :string
  name: string;
  imageUrl: string;
  rating: number;
}

interface MovieSliderProps {
  movies: Movie[];
}

const MovieSlider = ({ movies }: MovieSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false); // New state for hydration check

  // Run only on the client after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function to handle scrolling with looping
  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const scrollAmount = 300;
    const slider = sliderRef.current;
    
    if (direction === 'left') {
      // Logic for looping scroll (client-side only behavior)
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth;
      }
      slider.scrollLeft -= scrollAmount;
    } else {
      // Logic for looping scroll (client-side only behavior)
      if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - scrollAmount)) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollAmount;
      }
    }
  };

  const validMovies = movies.filter(movie => movie.imageUrl && movie.name);
  const repeatedMovies = [...validMovies, ...validMovies];

  return (
    <div className="relative">
      <div 
        ref={sliderRef}
        className="slider flex flex-row gap-12 overflow-x-scroll overflow-y-hidden pb-4 px-9 scroll-smooth py-12"
      >
        {repeatedMovies.map((movie, index) => (
          <MovieCard
            id={movie._id}
            key={`${movie.name}-${index}`} 
            name={movie.name}
            imageUrl={movie.imageUrl}
            rating={movie.rating}
          />
        ))}
      </div>
      
      {/* CONDITIONAL RENDERING APPLIED HERE:
        Only render the interactive buttons on the client after mounting, 
        or ensure their classnames are deterministic. 
        Since the buttons are involved in the error, we render them only if mounted.
      */}
      {isMounted && (
        <>
          {/* Scroll Left Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-4 rounded-r-lg 
                        backdrop-blur-sm shadow-xl z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          {/* Scroll Right Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-4 rounded-l-lg 
                        backdrop-blur-sm shadow-xl z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieSlider;