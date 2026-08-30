import Todo from './Todo'

function Todos({todos , completeTodo , deleteTodo}) {
  return (
    <div className='mt-10 flex flex-col gap-5 px-40'>
      {todos.map(todo => 
        <Todo key = {todo.id} todo = {todo} completeTodo = {completeTodo} deleteTodo={deleteTodo}/>
      )}
    </div>
  )
}

export default Todos