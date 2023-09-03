import {NavLink} from 'react-router-dom';  //NavLink is used to navigate the application,it also has some other functionalities discussed later. 
import '../index.css';  //importing for styling


function Navigation(){
  return(
      /*The NavLink has activeClassName attribute that gives the class "active" to the route we are currently on.
      the to attribute is used fir addressing.
      */

    <>
   <div>
      <ul>
        <li><NavLink activeClassName="active" to="/">Home</NavLink></li> 
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to= "/someotherpage">SomeOtherPage</NavLink></li>
      </ul>
    </div>
    
   
    </>
   
  );


}

export default Navigation;