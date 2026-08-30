import React from 'react'
import Section from './Section'

function Contact() {
  return (
    <Section sectionName={"Contact"}>
      
      <a 
        href='mailto:sakibraza787@gmail.com'
        className="text-blue-500 underline"
      >
        Mail Me
      </a> 

      <br />

      <a 
        href='https://github.com/sakibraza-dev'
        target='_blank'
        className="text-blue-500 underline"
      >
        GitHub
      </a>

      <br />
      
      <a
        href ="https://www.linkedin.com/in/sakib-raza-383071391/"
        target='_blank'
        className="text-blue-500 underline"
      >
        LinkedIn
      </a>

    </Section>
  )
}

export default Contact