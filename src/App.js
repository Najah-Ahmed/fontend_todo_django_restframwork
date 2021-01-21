import Navbar from './components/Navbar'
import Todo from './components/Todo'
import TodoDetails from './components/TodoDetails'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import About from './components/layouts/About'
import Services from './components/layouts/Services'
import Contact from './components/layouts/Contact'
import CreateTodo from './components/CreateTodo'

function App() {
  return (

   <Router>
      <div >
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <Todo/>
        </Route>
        <Route exact path="/add">
        <CreateTodo/>
        </Route>
        <Route exact path="/details/:id">
        <TodoDetails/>
        </Route>
        <Route exact path="/about">
        <About/>
        </Route>
        <Route exact path="/services">
        <Services/>
        </Route>
        <Route exact path="/contact">
        <Contact/>
        </Route>
        
      </Switch>
    </div>
   </Router>
  );
}

export default App;
