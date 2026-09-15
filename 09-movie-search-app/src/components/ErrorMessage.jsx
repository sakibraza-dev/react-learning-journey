
function ErrorMessage({error}) {
  return (
    <div className="text-center py-20">
        <h1 className="text-3xl text-gray-400 font-medium">{error}</h1>
    </div>
  )
}

export default ErrorMessage