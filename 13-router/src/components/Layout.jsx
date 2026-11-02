import {NavLink, Outlet} from 'react-router'

function Layout() {
  return (
    <section>
        <nav className="flex gap-5 p-5 bg-gray-800 text-white text-xl font-medium">

            <NavLink 
              to="/" 
              className={ ({isActive}) => isActive ? 'border-b-4 border-indigo-500' : ''} 
            >
              Home
            </NavLink>

            <NavLink 
              to="about" 
              className={ ({isActive}) => isActive ? 'border-b-4 border-indigo-500' : '' }
            >
              About
            </NavLink>

            <NavLink
              to="contact"
              className={ ({isActive}) => isActive ? 'border-b-4 border-indigo-500' : '' }
            >
              Contact
            </NavLink>

        </nav>

        <Outlet />

    </section>
  )
}

export default Layout