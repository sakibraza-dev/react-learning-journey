import React from 'react'
import Section from './Section'

function Project() {
  return (
    <Section sectionName={"My Projects"}>
      <div>
        <h3>Music Player</h3>
        <p className='text-xl'>A responsive music player built with HTML, CSS, and JavaScript using OOP concepts</p>
      </div>

      <div>
        <h3>Notes App</h3>
        <p className='text-xl'>A simple notes application built with JavaScript to create, edit, and manage notes.</p>
      </div>
    </Section>
  )
}

export default Project