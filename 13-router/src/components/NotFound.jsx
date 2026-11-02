import { Link } from "react-router"

function NotFound() {
  return (
    <section className='w-full min-h-screen flex items-center justify-center flex-col gap-5'>
        <h1 className='text-5xl font-medium text-yellow-600'>"NotFound !!!" page</h1>

        <Link
            to="/"
            className="bg-blue-900 text-white p-2 rounded text-medium"
        >
            Back to Home
        </Link>

    </section>
  )
}

export default NotFound