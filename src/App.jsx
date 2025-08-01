import './App.css';
import React from 'react';
import { useRoutes, useParams } from 'react-router-dom'
import ReadCrewmate from './pages/ReadCrewmate'
import CreateCrewmate from './pages/CreateCrewmate'
import EditCrewmate from './pages/EditCrewmate'
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import CrewmateDetails from './pages/CrewmateDetails';


const App = () => {
  
  

  const crewmates = [
      {'id':'1', 
      'name': 'John',
      'color':'red', 
      'speed': '3'},
      {'id':'2', 
      'name': 'Sam',
      'color':'blue', 
      'speed': '4'},
  ]

  function CrewmateDetailsWrapper() {
    const { id } = useParams();
    const crewmate = crewmates.find(c => c.id === id);
    return <CrewmateDetails {...crewmate} />;
  }

  function CrewmateEditDetailsWrapper() {
    const { id } = useParams();
    const crewmate = crewmates.find(c => c.id === id);
    return <EditCrewmate {...crewmate} />;
  }


  // Sets up routes
  let element = useRoutes([
    {
      path: "/crewmate-gallery",
      element:<ReadCrewmate data={crewmates}/>
    },
    {
      path:"/crewmate-gallery/edit/:id",
      element: <CrewmateEditDetailsWrapper/>
    },
    {
      path:"/create-crewmate",
      element: <CreateCrewmate />
    },
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/crewmate-gallery/detail/:id",
      element: <CrewmateDetailsWrapper />
    }
  ]);

  return ( 
  <div className="App">
    <div className="sidebar">
      <h4>Crewmate Creator</h4>
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
      </div>
    </div>
    <div className="main-content">
      {element}
    </div>
  </div>
)
}

export default App
