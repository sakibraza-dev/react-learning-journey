import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [input, setInput] = useState("");

  const increase = () => {
    setCount(prev => prev + step);
  }

  const decrease = () => {
    setCount(prev => prev - step);
  }

  const reset = () => {
    setCount(0);
    setStep(1);
  }

  const stepHandler = (e) => {
    setStep(Number(e.target.value));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(input !== ""){
      setCount(Number(input));
    }
    setInput("");
  }
  return (
    <>
      <h1 className='text-5xl m-8'>Interactive Counter</h1>
      <h1 className='text-9xl mt-5'>{count}</h1>
      <div className='buttons mt-20 flex items-center justify-center gap-20'>
        <button
          className='border-2 px-2 py-1 rounded font-medium hover:text-white'
          onClick={increase}>
          Increase +{step}
        </button>
        <button
          className='border-2 px-2 py-1 rounded font-medium hover:text-white'
          onClick={decrease}>
          Decrease -{step}
        </button>
        <button
          className='border-2 px-2 py-1 rounded font-medium hover:text-white'
          onClick={reset}>
          Reset
        </button>
      </div>

      <div className='flex justify-center items-center mt-20 gap-2'>
        <p className='text-xl font-medium'>Step:</p>
        <input
          type="number"
          min={1}
          value={step}
          className='border-2 rounded px-2 py-1 w-25' onChange={stepHandler} />
      </div>

      <form
        className='flex items-center justify-center mt-10 gap-2'
        onSubmit={submitHandler}>
        <p className='text-xl font-medium'>Set Counter :</p>
        <input
          type="text" placeholder='Enter Number'
          className='border-2 rounded px-2 py-1 w-30'
          value={input}
          onChange={e => setInput(e.target.value)} />
        <button
          className='border-2 px-2 py-1 rounded font-medium hover:text-white'>
          Submit
        </button>

      </form>

    </>
  )
}

export default App
