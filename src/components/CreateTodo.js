import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const CreateTodo = ()=>{
const [title,setTitle]=useState('')
const [descption,setDescption]=useState('')
const [completed,setCompleted]=useState(false)
const [isLoading,setIsLoading]=useState(false)
const history =useHistory()
const handleSubmit = (e)=>{
  e.preventDefault()
  const todos ={title, descption,completed}
  setIsLoading(true)
  const url ='http://localhost:8000/api/todos'
  fetch(url,{ method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(todos)
      } 
   ).then(
      console.log("new todo was added"),
      setIsLoading(false),
      history.push('/')
   )

}

  return(<div><h1>Create Blog</h1>
  
  <form onSubmit={handleSubmit} > 
   <div>
   <label>Title</label>
    <input type="text" name="title" 
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    />
   </div>
   <div>
   <label>Description:</label>
    <textarea name="descption" cols="30" rows="10"
      value={descption}
      onChange={(e)=>setDescption(e.target.value)}></textarea>
   </div>
   <div>
   <label>Completed</label>
   <input checked={completed} type="checkbox" 
   value={completed}

    onChange={(e)=>setCompleted(e.target.checked)}
   />
   </div>
   {!isLoading && <button  > Add Todo</button>}
   {isLoading && <button disabled  >Loading add todo ...</button>}
  </form>
 
  </div>)
}
export default CreateTodo