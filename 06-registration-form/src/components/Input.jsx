import React from 'react'

function Input({label , type , name , value , onChange , error , showPassword , setShowPassword}) {
    if(type === 'password'){
        return(
            <div>
                <label className="block mb-1 font-medium text-gray-700" htmlFor={name}>{label}</label>
                <div className='relative w-full'>
                    <input 
                        className='border border-gray-400 w-full mx-1 font-medium px-3 py-2 rounded outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition pr-16'
                        type={showPassword ? "text" : "password"} 
                        name={name} 
                        id={name}
                        onChange={onChange}
                        value={value}
                    />
                    <span 
                        className='absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer text-sm text-gray-500
               hover:text-gray-800 font-medium'
                        onClick={() => setShowPassword(prev => !prev)}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </span>
                </div> 
                <div className='min-h-6'>
                {error && <p className='text-sm text-red-600'>{error}</p>}
                </div>
            </div>
        )

    }
  return (
    <div>
        <label  className="block mb-1 font-medium text-gray-700" htmlFor={name}>{label}</label>
        <input 
            className='border border-gray-400 w-full mx-1 font-medium px-3 py-2 rounded outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition'
            type={type} 
            name={name} 
            id={name}
            value={value}
            onChange={onChange}
        />
        <div className='h-6'>
            {error && <p className='text-sm text-red-600'>{error}</p>}
        </div>
        
    </div>
  )
}

export default Input