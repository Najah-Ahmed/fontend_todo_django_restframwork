
import {Link } from 'react-router-dom'

const NotFound = ()=>{
return (
  <div>
    <h2>Sorry </h2>
    <p>
      Not found page 404
    </p>
    <Link to='/'>Go Back To HomePage ....</Link>
  </div>
)
}
export default NotFound