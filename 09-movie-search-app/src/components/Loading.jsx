import React from 'react'

function Loading() {
  return (
    <div className='flex items-center justify-center gap-2 w-full min-h-screen'>
        <div className='w-8 h-8 rounded-full border-5 border-gray-400 border-t-white animate-spin'></div>
        <h1 className='text-2xl text-gray-200 font-medium'>Loading . . .</h1>
    </div>
  )
}

export default Loading