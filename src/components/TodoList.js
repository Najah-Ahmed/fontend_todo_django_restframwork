import {Link } from 'react-router-dom'

const TodoList=({todos,title})=>{
  return(
    <div className="todo__list">
      <h1>{title}</h1>
        {todos.map((todo)=>(
    <div className="todo" key={todo.id}>
      <h2 className="todo-title">
      <Link to={`/details/${todo.id}`}>{todo.title}</Link>
      </h2>
    </div>
  ))}
    </div>
  )
}
export default TodoList