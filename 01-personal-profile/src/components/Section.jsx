import React from 'react'

function Section({children , sectionName}) {
  return (
    <div className='text-2xl p-5 font-medium'>
        <h2 className='bg-gray-200 p-2 font-bold mb-2'>{sectionName}</h2>
        {children}
    </div>
  )
}

export default Section