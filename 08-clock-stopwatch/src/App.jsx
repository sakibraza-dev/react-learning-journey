import { useEffect, useState } from 'react'
import Clock from './components/Clock'
import Stopwatch from './components/Stopwatch';


function App() {
  const [time , setTime] = useState({
    hour : new Date().getHours(),
    minute : new Date().getMinutes(),
    second : new Date().getSeconds()
  });

  useEffect(()=>{
    const id = setInterval(()=> {
      const now = new Date();
      setTime({
        hour : now.getHours(),
        minute : now.getMinutes(),
        second : now.getSeconds()
      });
    },1000);

    return () => clearInterval(id);
  },[]);
  
  return (
    <div className='bg-gray-900 min-h-screen flex items-center justify-center p-10'>

      <div className='absolute top-0 left-0 p-5'>
        <Clock timer={time} />
      </div>

      <Stopwatch />

    </div>
  )
}

export default App
