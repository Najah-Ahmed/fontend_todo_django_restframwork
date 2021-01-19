import {useParams} from 'react-router-dom'
import useFetch from './useFetch'

const TodoDetails=()=>{

  const {id}=useParams()
  const url =`http://localhost:8000/api/todos/details/${id}`
const {data:todos,isLoading,error}=useFetch(url)
    return (
    <div>
      <h1>Todo Details-{id}</h1>
      {error && <div>{error}</div>}
  {isLoading && <div>Loading....</div>}
  {todos && (
    <article>
      <h2>{todos.title}</h2>
           <p>{todos.descption}</p>

      {todos.completed===true ? <input type="checkbox" name="completed" defaultChecked />
      :
      <input type="checkbox" name="completed" />}
    </article>
  )}
 
    </div>
  )
    
  
}
export default TodoDetails 