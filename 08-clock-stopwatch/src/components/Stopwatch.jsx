import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [timer , setTimer] = useState(0);
    const [isRunning , setIsRunning] = useState(false);
    
    useEffect(() => {
        if(isRunning){
            const id = setInterval(()=>{
                setTimer(prev => prev + 1);
            } ,1000);
        
            return () => { clearInterval(id) }
        }
    },[isRunning])
    
    const hour = String(Math.floor(timer / 3600)).padStart(2,'0');
    const minute = String( Math.floor((timer % 3600) / 60) ).padStart(2,'0');
    const second = String( timer % 60).padStart(2,'0');
    
    const resetHandler = () => {
        setTimer(0);
        setIsRunning(false);
    }

  return (
    <div className='text-white flex flex-col items-center gap-30'>
        <h1 className='text-[clamp(5rem,10vw,8rem)] font-bold'>{hour}:{minute}:{second}</h1>
        <div className='flex justify-between gap-1'>
            <button 
                className='border py-2 px-5 rounded-l-4xl font-bold border-gray-600 text-gray-600 hover:border-white hover:text-white hover:scale-105 focus:border-green-700 focus:text-green-500 focus:scale-105 transition'
                onClick={() => setIsRunning(true)}
            >
                Start
            </button>

            <button 
                className='border py-2 px-5 font-bold border-gray-600 text-gray-600 hover:border-white hover:text-white hover:scale-105 focus:border-red-700 focus:text-red-500 focus:scale-105 transition'
                onClick={() => setIsRunning(false)}
            >
                Stop
            </button>
            <button 
                className='border py-2 px-5 rounded-r-4xl font-bold border-gray-600 text-gray-600 hover:border-white hover:text-white hover:scale-105 transition'
                onClick={resetHandler}
            >
                Reset
            </button>

        </div>
    </div>
  )
}

export default Stopwatch