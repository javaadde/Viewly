import Image from 'next/image'
import React from 'react'

interface MovieCardProps {
  title: string
  posterPath: string
  releaseDate: string
  voteAverage: number
}

const MovieCard = ({ title, posterPath, releaseDate, voteAverage }: MovieCardProps) => {
  return (
    <div className="relative group cursor-pointer rounded-2xl shadow-xl hover:shadow-gray-800 transition-all duration-200 hover:-translate-y-6">
      {/* Card Container */}
      <div className="relative w-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg transition-all duration-300  ">
        {/* Movie Poster */}
        <Image
          src={posterPath}
          alt={title}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 250px) 100vw, 250px"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Movie Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-2 truncate">{title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-sm">{new Date(releaseDate).getFullYear()}</span>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span>{voteAverage.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard