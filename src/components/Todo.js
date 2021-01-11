import {useState,useEffect} from 'react'
import TodoList from './TodoList'

const Todo=()=>{
  const [todos,setTodos]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  const [error,setError]=useState(null)
 
useEffect(()=>{
  setTimeout(()=>{
    fetch(' http://localhost:8000/api/todos/')
    .then(res=>{ 
      if(!res.ok){
        throw Error("Error ... Count fetch data")
      }
      return res.json()})
    .then(data => {
    setTodos(data)
    setIsLoading(false)
    setError(null)
  })
    .catch(err=>{
      setError(err.message)
      setIsLoading(false)
    })
  },1000)
 


},[])
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