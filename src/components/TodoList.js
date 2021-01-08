const TodoList=({todos,title})=>{
 
  return(
    <div className="todo__list">
      <h1>{title}</h1>
        {todos.map((todo)=>(
    <div className="todo" key={todo.id}>
      <h2 className="todo-title">
        {todo.title}
      </h2>
      <p>{todo.description}</p>
      <h6>{todo.completed}</h6>
      {/* <button className="delete" onClick={()=>handleDelete(todo.id)}>Delete Todo</button> */}
    </div>
  ))}
    </div>
  )
}
export default TodoList