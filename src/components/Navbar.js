
import {Link } from 'react-router-dom'
const Navbar=()=>{
  return (
    <div className="nav">
 
   <nav>
        <div className="logo">AppTodo</div>
       
       <ul>
          <li><Link  to="/"> Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="services">Services</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="add">Add Todos</Link></li>
        </ul>
      
      </nav>
  
    </div>
  );
}
export default Navbar