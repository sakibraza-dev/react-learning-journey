import React, { useState } from 'react'

function Filter({products , filterHandler , filterCategory}) {
    const uniqueCategory = ["All",...new Set(products.map(product => product.category))];
  return (
    <div className='px-5 py-2 flex items-center gap-2'>
        {uniqueCategory.map(category => 
            <button
                key={category} 
                className={`border px-2 py-1 rounded-md font-bold ${category === filterCategory ? 'text-green-700': 'text-white'} hover:text-green-700 `}
                onClick={() => {filterHandler(category)}}
            >
                {category}
            </button>
        )}
    </div>
  )
}

export default Filter