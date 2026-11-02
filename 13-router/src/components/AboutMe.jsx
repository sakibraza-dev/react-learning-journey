import { useOutletContext } from "react-router"

function AboutMe() {

  const { aboutMe } = useOutletContext();

  return (
    <section className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-xl font-medium text-yellow-600'>About Me Section</h1>
        
        <section className="mt-1 border-1 p-2">
          <h1 className="text-xl font-medium">{aboutMe.title}</h1>
          <p>{aboutMe.name}</p>
          <p>{aboutMe.skill}</p>
        </section>

    </section>
  )
}

export default AboutMe