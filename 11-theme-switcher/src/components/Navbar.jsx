import { useTheme } from "../ThemeContext"

const themeClass = {
  light : {
    navTheme: "bg-white text-black border-gray-200" ,
    linkTheme: "text-gray-700",
    buttonTheme: "bg-gray-900 text-white" 
  },

  dark : {
    navTheme: "bg-black text-white border-gray-800" ,
    linkTheme: "text-gray-300",
    buttonTheme: "bg-gray-200 text-black"

  }
};

function Navbar({children}) {

  const {theme} = useTheme();
  const currentTheme = themeClass[theme];

  return (
    <nav className={`flex items-center justify-between px-8 py-5 border-b  ${currentTheme.navTheme} transition`}>
      <h2 className="text-2xl font-bold tracking-tight">
        My<span className="text-violet-500">Website</span>
      </h2>
      <div className="flex items-center gap-8">
        {children}
        <a
          href="#"
          className={`text-sm font-medium hover:text-violet-500 transition ${currentTheme.linkTheme}`}
        >
          Home
        </a>

        <a
          href="#"
          className={`text-sm font-medium hover:text-violet-500 transition ${currentTheme.linkTheme}`}
        >
          Projects
        </a>

        <a
          href="#"
          className={`text-sm font-medium hover:text-violet-500 transition ${currentTheme.linkTheme}`}
        >
          About
        </a>

        <button className={`px-4 py-2 rounded-full text-sm hover:scale-105 transition ${currentTheme.buttonTheme}`}>
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Navbar