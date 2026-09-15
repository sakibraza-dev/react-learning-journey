import { useState } from "react"

function SearchBar({handleSearch}) {
    const [input , setInput] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        handleSearch(input);
        setInput("");
    }
  return (
    <div className="w-full text-center">
        <form
            onSubmit={submitHandler}
            className="flex justify-center items-center gap-1" 
        >
            <input 
                type="text"
                className="w-xl border-2 border-gray-500 px-3 py-2 rounded-l-lg text-lg outline-none focus:border-white transition"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Movie Name" 
            />
            <button
                type="submit"
                className="text-gray-500 border-2 border-gray-500 px-3 py-2 rounded-r-lg text-lg hover:border-white hover:text-white transition-all"
            >Search</button>
        </form>
    </div>
  )
}

export default SearchBar