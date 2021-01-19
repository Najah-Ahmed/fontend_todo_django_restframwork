import {Link } from 'react-router-dom'

const TodoList=({todos,title})=>{

       
 
  return(
    <div className="todo__list">
      <h1>{title}</h1>
        {todos.map((todo)=>(
    <div className="todo" key={todo.id}>
      <h2 className="todo-title">
        {todo.title}
      </h2>
      <Link to={`/details/${todo.id}`}>details</Link>
      {/* <p>{todo.descption}</p> */}

      {/* {todo.completed===true ? <input type="checkbox" name="completed" defaultChecked />
      :
      <input type="checkbox" name="completed" />} */}

    

      {/* <button className="delete" onClick={()=>handleDelete(todo.id)}>Delete Todo</button> */}
    </div>
  ))}
    </div>
  )
}
export default TodoList