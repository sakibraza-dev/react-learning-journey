import React from 'react'

function Select({name , value , onChange , options , error}) {
  return (
    <div className='mb-5'>
        <select 
            name={name} 
            id={name}
            value={value}
            
            className='w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200'
            onChange={onChange}
        >
            <option value="" disabled>Select</option>
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        <div>{error && <p className='text-red-600'>{error}</p>}</div>
    </div>
  )
}

export default Select