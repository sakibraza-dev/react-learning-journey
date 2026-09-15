import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const [query , setQuery] = useState("");
  const [movies , setMovies] = useState(null);
  const [error , setError] = useState("");
  const [loading , setLoading] = useState(false);
  
  async function getMovies(movieName) {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`);
      
      // handle 404 , 500 error
      if(!response.ok){             
        throw new Error("Unable to fetch movies. Please try again.");
      }
      const data = await response.json();
      // handle respond contain blank or name miss typed
      if(data.Response === "False"){
        setMovies(null);
        throw new Error(data.Error);
      }
      setMovies(data.Search);
    }

    catch(error){
      setError(error.message);
    }
    finally{
      setLoading(false);
    }

  }

  useEffect( () => {
    if(query.trim() !== ""){
      getMovies(query);
    }
  } , [query])

  const searchHandler = (searchQuery) => {
    setQuery(searchQuery);
  }
  return (
    <div className="w-full min-h-screen p-10 bg-gray-900 text-white">
      <SearchBar handleSearch={searchHandler} />
      {movies && <MovieList movieList = {movies} />}
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
    </div>

  )
}

export default App
