import { useTheme } from "../ThemeContext"

function Main() {

  const {theme} = useTheme();

  const mainTheme = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  const buttonHoverTheme = theme === 'dark' ? 'hover:bg-gray-700': 'hover:bg-gray-100';
    
  return (
    <main className={`min-h-[80vh] flex items-center justify-center px-6 ${mainTheme} transition`}>
      <div className="max-w-3xl text-center">

        <p className="inline-block px-4 py-2 mb-6 rounded-full bg-violet-100 text-violet-600 text-sm font-medium">
          Welcome to my space ✨
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Build. Learn.
          <span className="block text-violet-500">
            Create.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto">
          A place where ideas turn into projects and projects turn
          into experience.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:scale-105 transition">
            Explore
          </button>

          <button className={`px-6 py-3 rounded-full border border-gray-300 font-medium ${buttonHoverTheme} transition`}>
            Learn More
          </button>
        </div>

      </div>
    </main>
  )
}

export default Main