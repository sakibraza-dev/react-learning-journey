import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import ThemeButton from "./components/ThemeButton"
import ThemeProvider from "./ThemeContext"

function App() {
  return (
    <div >
      <ThemeProvider>

        <Navbar>
          <ThemeButton />
        </Navbar>
        
        <Main />
        
        <Footer />
      
      </ThemeProvider>
    </div>
  )
}

export default App
