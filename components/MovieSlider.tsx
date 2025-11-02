'use client';

import React, { useRef } from 'react';
import MovieCard from './MovieCard';

interface Movie {
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
}

interface MovieSliderProps {
  movies: Movie[];
}

const MovieSlider = ({ movies }: MovieSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling with looping
  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const scrollAmount = 300;
    const slider = sliderRef.current;
    
    if (direction === 'left') {
      if (slider.scrollLeft <= 0) {
        // If at the start and going left, jump to end
        slider.scrollLeft = slider.scrollWidth;
      }
      slider.scrollLeft -= scrollAmount;
    } else {
      if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - scrollAmount)) {
        // If at the end and going right, jump to start
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollAmount;
      }
    }
  };

  // Duplicate the movies array to create a continuous loop effect
  const repeatedMovies = [...movies, ...movies];

  return (
    <div className="relative">
      <div 
        ref={sliderRef}
        className="slider flex flex-row gap-12 overflow-x-scroll overflow-y-hidden pb-4 px-9 scroll-smooth py-12"
      >
        {repeatedMovies.map((movie, index) => (
          <MovieCard
            key={`${movie.title}-${index}`}
            title={movie.title}
            posterPath={movie.posterPath}
            releaseDate={movie.releaseDate}
            voteAverage={movie.voteAverage} 
          />
        ))}
      </div>
      <button 
        onClick={() => scroll('left')}
        className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-4 rounded-r-lg 
                 backdrop-blur-sm shadow-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-4 rounded-l-lg 
                 backdrop-blur-sm shadow-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default MovieSlider;