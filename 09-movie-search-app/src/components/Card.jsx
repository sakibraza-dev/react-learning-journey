import React, { useState } from 'react'

function Card({movieData}) {
  const [imageError , setImageError] = useState(false);
  return (
    <div className='flex flex-col items-start bg-gray-800 w-70 rounded-md overflow-hidden border-1 border-gray-600'>
      <div className='w-full h-90 border-b-1 border-gray-600 flex items-center justify-center'>
        {movieData.Poster === "N/A"
          ?<p className='text-lg font-medium text-gray-400'>Image Not Found!</p>
          : imageError ? <p className='text-lg font-medium text-gray-400'>Image Fail to Load!</p>
          : <img 
            className='w-full h-full object-cover'
            src={movieData.Poster} 
            alt={movieData.Title} 
            onError={() => setImageError(true)}
          />
        }
      </div>
      <div className='px-2 py-2'>
        <h1 className='text-xl font-medium text-gray-100'>{movieData.Title}</h1>
        <p className='text-lg font-medium text-gray-400'>{movieData.Year}</p>
      </div>
    </div>
  )
}

export default Card
