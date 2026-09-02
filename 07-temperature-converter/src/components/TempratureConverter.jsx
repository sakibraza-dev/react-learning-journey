import { useState } from 'react'
import TempratureInput from './TempratureInput';

function TempratureConverter() {
    const [temprature , setTemprature] = useState(0);
    const [input , setInput] = useState("Celsius");
  return (
    <div className='py-10 px-[clamp(1rem,5vw,3rem)] flex flex-col gap-10 items-center bg-blue-100 rounded-lg'>
        <h1 className='text-[clamp(2rem,5vw,3rem)] font-bold text-blue-900'>Temprature Converter</h1>

        <TempratureInput 
            unit="Celsius"
            temprature={temprature} 
            onTempratureChange={setTemprature} 
            input={input} 
            onInputChange = {setInput} 
        />
        
        <TempratureInput 
            unit="Fahrenheit"
            temprature={temprature} 
            onTempratureChange={setTemprature} 
            input={input} 
            onInputChange = {setInput} 
        />
    </div>
  )
}

export default TempratureConverter