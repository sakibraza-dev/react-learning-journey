
function Todo({todo , completeTodo , deleteTodo}) {
  return (
    <div className='flex border items-center justify-between px-3 py-5'>
        <div className="flex items-center gap-3">
          <input 
            checked = {todo.complete}   
            type="checkbox" className='w-5 h-5'
            onChange={() => completeTodo(todo.id)}
          />
        <p className="text-2xl font-medium">{todo.title}</p>
        </div>
        <button 
          className="border-2 px-2 py-1 rounded hover:text-red-700 hover:scale-105 transition-all"
          onClick={() => deleteTodo(todo.id)}>
            delete
        </button>
    </div>
  )
}

export default Todo