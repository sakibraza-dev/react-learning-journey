import { useOutletContext } from "react-router"

function AboutWebsite() {

  const { aboutWeb } = useOutletContext();

  return (
    <section className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-xl font-medium text-yellow-600'>About Website Section</h1>

        <section className="mt-1 border-1 p-2">
          <h1 className="text-xl font-medium">{aboutWeb.title}</h1>
          <p>{aboutWeb.name}</p>
        </section>

    </section>
  )
}

export default AboutWebsite