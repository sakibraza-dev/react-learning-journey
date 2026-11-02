import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import AboutMe from './components/AboutMe'
import AboutWebsite from './components/AboutWebsite'
import VanDetails from './components/VanDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route index  element={<Home />} />
          <Route path="about" element={<About />} >
            <Route index element={<AboutMe />} />
            <Route path='aboutweb' element={<AboutWebsite />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path='vandetails/:id/:type/:name' element={<VanDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
