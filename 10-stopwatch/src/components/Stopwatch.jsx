function Stopwatch({second , startTimer , stopTimer , resetTimer}) {

    const hour = String(Math.floor(second / 3600)).padStart(2, '0');
    const minute = String(Math.floor((second % 3600) / 60)).padStart(2, '0');
    const sec = String(second % 60).padStart(2, '0');
   
  return (
    <div className='flex flex-col items-center gap-10'>
        <h1
         className='text-5xl font-medium tracking-wider'
        >
            {hour}:{minute}:{sec}
        </h1>

        <div className='flex gap-2'>
            <button
                onClick={startTimer}
                className='border px-3 py-1 rounded hover:border-green-500 hover:text-green-500 hover:scale-105 focus:scale-105 focus:border-green-500 focus:text-green-500 focus:font-medium transform'
            >
                Start
            </button>

            <button
                onClick={stopTimer}
                className='border px-3 py-1 rounded hover:border-yellow-300 hover:text-yellow-300 hover:scale-105 focus:scale-105 focus:border-yellow-300 focus:text-yellow-300 focus:font-medium transform'
            >
                Stop
            </button>

            <button
                onClick={resetTimer}
                className='border px-3 py-1 rounded hover:border-red-500 hover:text-red-500 hover:scale-105 transform'
            >
                Reset
            </button>
        </div>

    </div>
  )
}

export default Stopwatch