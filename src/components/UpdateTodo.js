import {useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import useFetch from './useFetch'

const UpdateTodo = ()=>{
const [title,setTitle]=useState('')
const [descption,setDescption]=useState('')
const [completed,setCompleted]=useState(false)

const history =useHistory()
const {id}=useParams()
const url =`http://localhost:8000/api/todos/details/${id}`

const {data:todos,isLoading,error}=useFetch(url)
console.log(todos)

const handleUpdate = (e)=>{
  e.preventDefault()
  const todosUpdate ={title, descption,completed}
  
  
  fetch(url,{ method:'PUT',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(todosUpdate)
      } 
   ).then(
      console.log("update todo"),
      
      history.push(`/details/${id}`)
   )

}
const onChangeTitle= (e)=>{
  setTitle({...title,[e.target.name]: e.target.value})
}
const onChangeDescpt= (e)=>{
  setDescption({...descption, [e.target.name]: e.target.value})
}
const onChangeCompleted= (e)=>{
 setCompleted({...completed,[e.target.name]: e.target.checked}
}

  return(<div><h1>Update  Blog</h1>
  
  {error && <div>{error}</div>}
  {isLoading && <div>Loading....</div>}

{todos &&(  <form onSubmit={handleUpdate} > 
   <div>
   <label>Title</label>
    <input type="text" name="title" 
    value={title}
    onChange={onChangeTitle}
    />
   </div>
   <div>
   <label>Description:</label>
    <textarea name="descption" cols="30" rows="10"
      value={descption}
      onChange={onChangeDescpt}></textarea>
   </div>
   <div>
   <label>Completed</label>
   <input checked={completed} type="checkbox" 
   value={completed}

    onChange={onChangeCompleted}
   />
   </div>
    <button  > Updated</button>
  </form>)}
 
  </div>)
}
export default UpdateTodo