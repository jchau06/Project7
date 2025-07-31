import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadCrewmate from './pages/ReadCrewmate'
import CreateCrewmate from './pages/CreateCrewmate'
import EditCrewmate from './pages/EditCrewmate'
import { Link } from 'react-router-dom'
import Home from './pages/Home'


const App = () => {
  
  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  const posts = [
      {'id':'1', 
      'title': 'Cartwheel in Chelsea 🤸🏽‍♀️',
      'author':'Harvey Milian', 
      'description': descr},
      {'id':'2', 
      'title': 'Love Lock in Paris 🔒',
      'author':'Beauford Delaney', 
      'description':descr},
      {'id':'3', 
      'title': 'Wear Pink on Fridays 🎀',
      'author':'Onika Tonya', 
      'description':descr},
      {'id':'4', 
      'title': 'Adopt a Dog 🐶',
      'author':'Denise Michelle', 
      'description':descr},
  ]


  // Sets up routes
  let element = useRoutes([
    {
      path: "/crewmate-gallery",
      element:<ReadCrewmate data={posts}/>
    },
    {
      path:"/crewmate-gallery/edit/:id",
      element: <EditCrewmate data={posts} />
    },
    {
      path:"/create-crewmate",
      element: <CreateCrewmate />
    },
    {
      path: "/",
      element: <Home />
    }
  ]);

  return ( 
  <div className="App">
    <div className="sidebar">
      <h4>Crewmate Creator</h4>
      {/* <h3>Create your own custom crewmate!</h3> */}
      {/* <img className='among-us-img' src="/among_us.png"/> */}
      <div className='buttons-div'>
          <Link to="/">
            <button className="headerBtn">
              Home Page
              <br />
              🏠
            </button>
          </Link>
        <Link to="/create-crewmate"><button className="headerBtn"> Create Crewmate 🎨 </button></Link>
        <Link to="/crewmate-gallery"><button className="headerBtn"> Crewmate Gallery 🖼️ </button></Link>
        {/* <Link to="/new"><button className="headerBtn"> Create Crewmate 🎨 </button></Link> */}
      </div>
    </div>
    <div className="main-content">
      {element}
    </div>
  </div>
)
}

export default App
