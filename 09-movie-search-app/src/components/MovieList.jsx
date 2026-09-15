import Card from './Card'

function MovieList({movieList}) {
  return (
    <div>
      <h1 className='text-2xl text-gray-300 font-medium'>Movies</h1>
      <div className='grid grid-cols-5 gap-5 pt-5 border-t-2 border-gray-600'>
          {movieList.map(movie => (
            <Card key={movie.imdbID} movieData = {movie}/>
          ))}
      </div>
    </div>
  )
}

export default MovieList