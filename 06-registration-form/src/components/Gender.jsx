import React from 'react'

function Gender({label , value , checked , id , onChange}) {
  return (
    <>
        <label htmlFor={id} className='flex items-center gap-2'>
            <input
                className='w-4 h-4 cursor-pointer'
                type="radio"
                name='gender'
                value={value}
                id={id}
                checked = {checked}
                onChange={onChange} 
            />
            {label}
          </label>
    </>
  )
}

export default Gender