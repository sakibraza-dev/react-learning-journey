# API + async React — Movie Search App

A simple movie search app built with React and JSX.

I built this project to understand how APIs work with React and how to handle asynchronous operations. I also learned how to handle loading, error, and empty-result states while fetching data from an API.

## About the Project

The project allows the user to search for movies by entering a movie name.

When the user searches for a movie, the app sends a request to the OMDb API using `fetch()` and gets the movie data.

The app displays a loading message while waiting for the response. If the request fails or the movie is not found, it displays an error message.

The movie results are displayed as cards containing the movie poster, title, and year.

I also handled cases where the API returns `"N/A"` for a poster and cases where the poster URL exists but the image fails to load.

## What I Learned

While building this project, I learned:

- How APIs work with React
- How to use `fetch()` to get data from an API
- How `async/await` works with API requests
- How `try/catch/finally` can be used for error handling
- How to check if a response was successful using `response.ok`
- How to convert an API response into JSON using `response.json()`
- How to work with API response data
- How to use `useEffect` for API requests
- How the dependency array controls when `useEffect` runs
- How to manage loading state using `useState`
- How to manage error state using `useState`
- How to handle empty or no-result searches
- How conditional rendering works in React
- How to pass data between components using props
- How to render a list using `.map()`
- Why React needs a `key` when rendering lists
- How to handle image loading errors using `onError`
- How environment variables work in Vite
- Why API keys should not be directly written in the source code
- How to use Tailwind CSS for styling

## Components

### `App`

This is the main component.

It stores the search query, movie data, loading state, and error state.

It contains the API request function and uses `useEffect` to call the API when a new search query is submitted.

It also renders the `SearchBar`, `MovieList`, `Loading`, and `ErrorMessage` components.

### `SearchBar`

This component contains the search input and search button.

It keeps track of the input using its own state.

When the form is submitted, it sends the entered movie name to the `App` component through a function passed as a prop.

### `MovieList`

This component receives the movie list through props.

It uses `.map()` to create a `Card` component for each movie.

Each movie uses its `imdbID` as the React `key`.

### `Card`

This component displays information about one movie.

It displays the movie poster, title, and release year.

It also handles poster problems. If the API returns `"N/A"`, it shows an image-not-found message.

If the poster URL exists but the image fails to load, the `onError` event changes the state and shows an image-failed-to-load message.

### `Loading`

This component displays a loading spinner and message while the API request is running.

### `ErrorMessage`

This component receives the error message through props and displays it when an error occurs.

## Important Part

The main thing I understood from this project is that an API request is asynchronous.

The app does not get the data immediately.

The flow is:

Search
↓
Search query is stored in state
↓
`useEffect` runs
↓
`fetch()` sends a request to the OMDb API
↓
Wait for the response using `await`
↓
Convert the response to JSON
↓
Check the API response
↓
If successful → store movie data
↓
If failed → store the error
↓
`finally` stops the loading state
↓
React re-renders the UI

The loading state works like this:

Start request
↓
`loading = true`
↓
Show Loading component
↓
API request finishes
↓
`finally` runs
↓
`loading = false`
↓
Loading component disappears

For image errors, I learned that checking:

`movieData.Poster === "N/A"`

only handles the case where the API says that an image is unavailable.

If the API gives an image URL but that URL fails to load, the `<img>` element's `onError` event can detect the failure.

The flow is:

Image URL received
↓
Browser tries to load image
↓
Image fails to load
↓
`onError` runs
↓
`setImageError(true)`
↓
React re-renders
↓
Image error message is displayed