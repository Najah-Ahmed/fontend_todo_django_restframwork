import {useState,useEffect} from 'react'
import TodoList from './TodoList'

const Todo=()=>{
  const [todos,setTodos]=useState([
    {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for upcoming test",
    completed: false
  },
  {
    id: 3,
    title: "Sally's books",
    description: "Go to library to rent sally's books",
    completed: true
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use django with react",
    completed: false
  }]);
  const handleDelete= (id)=>{
const newTodos=todos.filter((todo) => todo.id!== id )
setTodos(newTodos)
  }
  // depence array will run when depence is call inside [] if there no depence remove []

useEffect(()=>{
  console.log('use effect running')
  console.log(todos)
})
  return(
<div className="showcase">
  Todo Home Page

  <TodoList todos={todos} title="All Todos!" handleDelete={handleDelete}/>
  {/*  reuse components */}
  {/* <TodoList todos={todos.filter((todo)=> todo.completed===true)} title="Complete Todos"/>
  <TodoList todos={todos.filter((todo)=> todo.completed===false)} title="Un Complete Todos"/> */}
</div>
  )
}
export default Todo