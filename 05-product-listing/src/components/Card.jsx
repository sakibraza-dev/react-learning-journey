import React from 'react'

function Card({product}) {
  return (
    <div className='border border-gray-300 rounded-sm p-2'>
        <img 
            className='w-full'
            src={product.image} 
            alt={product.name} 
        />

        <h1 className='text-2xl px-1 font-bold text-white mt-3'>{product.name}</h1>
        <p className='text-lg px-1 font-bold'>{product.category}</p>
        <p className='text-lg px-1 font-medium text-red-600'> &#8377;{product.price}</p>
        <p className='text-lg px-1 font-medium text-yellow-500'>⭐{product.rating}</p>
        <p>{product.description}</p>
        <p 
            className={`text-lg px-1 font-medium ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
        </p>
    </div>
  )
}

export default Card