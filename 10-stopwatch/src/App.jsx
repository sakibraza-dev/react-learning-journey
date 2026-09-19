import { useRef, useState } from "react"
import Stopwatch from "./components/Stopwatch"

function App() {
  const [time , setTime] = useState(0);
  const intervalId = useRef(null);

  const startTime = () => {
    if(intervalId.current === null) {
      intervalId.current = setInterval(() => {
        setTime(prev => prev + 1);
      } , 1000);
    }

  }

  const stopTime = () => {
    if(intervalId.current){
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }

  const resetTime = () => {
    stopTime();
    setTime(0);
  }

  return (
    <div className="bg-black w-full min-h-screen text-white flex items-center justify-center">
      <Stopwatch second = {time} startTimer={startTime} stopTimer={stopTime} resetTimer={resetTime} />
    </div>
  )
}

export default App
