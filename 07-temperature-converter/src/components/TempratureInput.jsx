function TempratureInput({temprature , onTempratureChange , input , onInputChange , unit}) {
    const newTemprature = input === unit 
                            ? temprature 
                            : unit === "Celsius" 
                                ? (temprature - 32) / 1.8 
                                : (temprature * 1.8) + 32;
  return (
    <div className='flex flex-col gap-2 w-full'>
        <p className='text-xl font-medium text-gray-600'>{unit}</p>
        <input 
            type="number" 
            className='border-2 border-gray-500 px-3 py-2 rounded text-xl font-medium text-gray-600 outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-200 transition'
            value={newTemprature}
            onChange={(e) => {onTempratureChange(e.target.value); onInputChange(unit)}}
        />
    </div>
  )
}

export default TempratureInput