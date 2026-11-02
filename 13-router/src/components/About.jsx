import React from 'react'
import { NavLink, Outlet } from 'react-router'

function About() {

  const data = {
    aboutMe : {
      title : "About Me" ,
      name : "Sakib Raza" ,
      skills : "C++ , React , JS"
    } ,

    aboutWeb : {
      title : "About Website" ,
      name : "Practice Webste" ,
    }

  }

  return (
    <section className='w-full min-h-screen flex items-center justify-center'>

        <section className='flex flex-col items-center justify-center w-sm h-100 bg-gray-200'>

          <nav className="flex gap-5 p-2 bg-gray-800 text-white font-medium w-full">
             <NavLink
              to="." end
              className={({isActive}) => isActive ? 'border-b-3 border-indigo-500' : '' }
              >
                Me
              </NavLink>

             <NavLink
              to="aboutweb"
              className={({isActive}) => isActive ? 'border-b-3 border-indigo-500' : '' }
              >
                Website
              </NavLink>

          </nav>

          <Outlet context={data} />

        </section>
    </section>
  )
}

export default About