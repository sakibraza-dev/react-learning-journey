// import { useContext } from 'react'
import { useTheme } from '../ThemeContext'
// import { ThemeContext } from '../ThemeContext'

function ThemeButton() {
    const {theme , toggle} = useTheme();
  return (
    <div>
        <button 
            className='text-2xl'
            onClick={toggle}
            aria-label="Toggle theme"
        >
            {theme === "light" ? "☀︎" : "⏾"}
        </button>
    </div>
  )
}

export default ThemeButton