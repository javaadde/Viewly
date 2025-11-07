
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


interface MovieCardProps {
  id:string
  name: string
  imageUrl: string
  rating: number
}



const MovieCard = ({ name, imageUrl, rating ,id}: MovieCardProps) => {
  
   
   

  // FIX: Added defensive check for empty/missing imageUrl to prevent the "src="" was passed" error.
  if (!imageUrl || imageUrl.trim() === "") {
    return null;
  }
    
  return (

    <Link href={`/movie/${id}`}>
    <div
     className="relative group cursor-pointer rounded-2xl shadow-xl hover:shadow-gray-800 transition-all duration-200 hover:-translate-y-6">
      {/* Card Container */}
      <div className="relative w-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg transition-all duration-300">
        {/* Movie Poster */}
        <Image
          src={imageUrl} 
          alt={name}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 250px) 100vw, 250px"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Movie Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-2 truncate">{name}</h3>
            <div className="flex justify-end items-center">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span>{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default MovieCard