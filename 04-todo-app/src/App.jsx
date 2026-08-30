import { useState } from 'react'

import Todos from './component/Todos.jsx';

function App() {
  const [input , setInput] = useState("");
  const [todos , setTodos] = useState(
    [
      {
        id : 1 ,
        title : "code",
        complete : true
      },
      {
        id : 2,
        title : "eat",
        complete : true
      },
      {
        id : 3,
        title : "sleep",
        complete : false
      }
    ]
  );

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos(prev => [...prev , { id: Date.now() , title : input , complete : false}]);
    setInput("");
  }

  const completeTodo = (id) => {
    setTodos(prev =>
      prev.map(todo => 
        todo.id === id ? {...todo , complete : !todo.complete} : todo
      )
    );
  }

  const deleteTodo = (id) => {
    setTodos(prev => 
      prev.filter(todo => 
        todo.id !== id
      )
    )
  }

  return (
    <>
      <h1>Todo App</h1>
      <form 
        className='flex items-center justify-center'
        onSubmit={submitHandler}
      >
        <input 
          placeholder='Enter Todo'
          className='border-2 w-xl h-10 px-2 py-5 text-xl font-medium rounded' 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      <button 
        type='submit'
        className='border-2 h-10 px-5 text-xl font-medium rounded ml-3 hover:text-blue-500 transition-all'>
          Create
      </button>
      </form>

      <Todos todos = {todos} completeTodo = {completeTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
