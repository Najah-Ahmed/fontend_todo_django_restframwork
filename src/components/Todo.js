
import TodoList from './TodoList'
import useFetch from './useFetch'

const Todo=()=>{

const url ='http://localhost:8000/api/todos/'
const {data:todos,isLoading,error}=useFetch(url)

  return(
<div className="showcase">
  Todo Home Page
  {error && <div>{error}</div>}
  {isLoading && <div>Loading....</div>}

  {todos && <TodoList todos={todos} title="All Todos!" />}
  {/*  reuse components */}
  {/* <TodoList todos={todos.filter((todo)=> todo.completed===true)} title="Complete Todos"/>
  <TodoList todos={todos.filter((todo)=> todo.completed===false)} title="Un Complete Todos"/> */}
  
</div>
  )
}
export default Todo