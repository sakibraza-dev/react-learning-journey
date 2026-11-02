import { useParams , Link } from "react-router"


function VanDetails() {
    const {id , type , name} = useParams();
  return (
    <section className='w-full min-h-screen p-2 flex flex-col items-center'>
        <h1 className='text-5xl font-medium text-yellow-600'>Van Details Page</h1>

        <section className="mt-5 mb-2">
            <h1 className='text-2xl font-medium text-blue-600'>Id : {id}</h1>
            <h1 className='text-2xl font-medium text-blue-600'>Name : {name}</h1>
            <h1 className='text-2xl font-medium text-blue-600'>Type : {type}</h1>
        </section>

        <Link
            to="/"
            className="bg-blue-900 text-white p-2 rounded text-medium"
        >
            Back
        </Link>

    </section>
  )
}

export default VanDetails