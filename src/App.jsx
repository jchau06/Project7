import './App.css';
import { useRoutes, useParams } from 'react-router-dom'
import ReadCrewmate from './pages/ReadCrewmate'
import CreateCrewmate from './pages/CreateCrewmate'
import EditCrewmate from './pages/EditCrewmate'
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import CrewmateDetails from './pages/CrewmateDetails';
import { supabase } from "./client";
import { useState, useEffect } from 'react';

const App = () => {

  // const [crewmates, setCrewmates] = useState([]);
  
  // const fetchCrewmates = async () => {
  //   const {data} = await supabase
  //     .from('Crewmates')
  //     .select();

  //   // set state of posts
  //   setCrewmates(data)
  // }

  // useEffect(() => {
  //   fetchCrewmates();
  // }, []);

  // const crewmates = [
  //     {'id':'1', 
  //     'name': 'John',
  //     'color':'red', 
  //     'speed': '3'},
  //     {'id':'2', 
  //     'name': 'Sam',
  //     'color':'blue', 
  //     'speed': '4'},
  // ]

const [crewmates, setCrewmates] = useState([]);

const fetchCrewmates = async () => {
  const { data, error } = await supabase.from('Crewmates').select();
  console.log("Supabase data:", data);
  console.log("Supabase error:", error);
  setCrewmates(data || []);
};


useEffect(() => {
  fetchCrewmates();
}, []);


function CrewmateDetailsWrapper() {
  const { id } = useParams();
  const crewmate = crewmates.find(c => c.id === Number(id));
  return <CrewmateDetails {...crewmate} />;
}

function CrewmateEditDetailsWrapper() {
  const { id } = useParams();
  const crewmate = crewmates.find(c => c.id === Number(id));

  if (!crewmate) return <p>Loading crewmate info...</p>;

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
