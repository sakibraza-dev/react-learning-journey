import { useTheme } from "../ThemeContext"

function Footer() {

  const {theme} = useTheme();

    const mainTheme = theme === 'dark' ? 'bg-black text-white border-gray-800' : 'bg-white text-black border-gray-200';

  return (
    <footer className={`border-t px-8 py-6 ${mainTheme} transition`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-gray-500">
          © 2026 MyWebsite
        </p>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-violet-500 transition">
            GitHub
          </a>

          <a href="#" className="hover:text-violet-500 transition">
            LinkedIn
          </a>

          <a href="#" className="hover:text-violet-500 transition">
            Twitter
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer