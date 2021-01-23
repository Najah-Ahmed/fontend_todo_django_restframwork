import {useParams,Link,useHistory} from 'react-router-dom'
import useFetch from './useFetch'

const TodoDetails=()=>{
const history=useHistory()
  const {id}=useParams()
  const url =`http://localhost:8000/api/todos/details/${id}`
const {data:todos,isLoading,error}=useFetch(url)



const deleteHandler=()=>{
fetch(url,
  {method:"DELETE",
  headers:{'Content-Type':'application/json'}
}
  ).then(()=>{
    history.push('/')
    console.log('deleted blog')


  })
}



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
      <hr/>

      <button onClick={deleteHandler}>Deleted</button>
      <hr/>
      <Link to={`/update/${id}`}>Updated</Link>
    </article>
  )}
 
    </div>
  )
    
  
}
export default TodoDetails 