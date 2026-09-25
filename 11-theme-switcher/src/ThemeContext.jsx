import { createContext, useContext, useState } from "react"

const ThemeContext = createContext(null);

function ThemeProvider({children}) {
  const [theme , setTheme] = useState("light");

  function toggle(){
    setTheme(prev => prev === "light" ? "dark" : "light");
  }

  const themeClass = theme === 'light' ? 'bg-white' : 'bg-black';

  return (
    <ThemeContext value={{theme , toggle ,}} >
      {children}
    </ThemeContext>
  )
}

export function useTheme(){
  return useContext(ThemeContext);
}

export default ThemeProvider

