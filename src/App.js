import { createBrowserRouter, createRoutesFromElements,
  Route, RouterProvider} from 'react-router-dom';
import About from './components/About';       //importing all the required components.
import Home from './components/Home';
import Root from './components/Root';
import SomeOtherPage from './components/SomeOtherPage';




function App() {

  const myrouter = createBrowserRouter(      //Main Router Function
    createRoutesFromElements(                
      /*Now we nest all the other routes inside of the "/" route, also the <Root/> component consists of all the elements
       that you want to have on all Pages, eg Navigation and Footer.
       The Next routes are to the Pages of your Application
       NOTE - the index is the Landing page of your Application.
       NOTE - Do not Create your homepage on App.js , else you will get errors "You cannot render a <Router> inside another <Router>""
       */
      <Route path = "/" element = {<Root/>}>  
        <Route index element = {<Home/>}/>    
        <Route path ="/someotherpage" element = {<SomeOtherPage/>}/>
        <Route  path = "/about" element = {<About/>}/>
      </Route>      
    )
  )

  return (
    <>
    <RouterProvider router = {myrouter}/>
    </>      //All data router objects are passed to this component to render your app.
  );
}



export default App;
