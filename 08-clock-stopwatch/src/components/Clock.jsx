import React from 'react'

function Clock({timer}) {
    const hour = String(timer.hour % 12 || 12).padStart(2,'0');
    const minute = String(timer.minute).padStart(2,'0');
    const second = String(timer.second).padStart(2,'0');
    const period = timer.hour >= 12 ? "PM" : "AM";
  return (
    <div className='text-white flex'>
        <h1 className='text-[clamp(2rem,4vw,3rem)] font-medium'>{hour}:{minute}:{second} {period}</h1>
    </div>
  )
}

export default Clock