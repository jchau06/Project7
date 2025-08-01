import { useState } from 'react'
import './CreateCrewmate.css'
import { supabase } from '../client'


const CreateCrewmate = () => {

    const [crewmate, setCrewmate] = useState({
        name: "",
        speed: "",
        color: ""
        });

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrewmate = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
        .from('Crewmates')
        .insert({
        name: crewmate.name,
        speed: parseFloat(crewmate.speed),
        color: crewmate.color
        });

    if (error) {
        console.error("Supabase insert error:", error.message);
        alert("Error creating crewmate: " + error.message);
        return;
    }

  console.log("Inserted data:", data);
  window.location = "/";
};


    return (
        <div className='create-crewmate-container'>
            <h1>
                Create a New Crewmate!
            </h1>
            <img className='among-us-img' src="/among_us.png"/>
            <form className='create-crewmate-form' onSubmit={createCrewmate}>
                
                <div className='input-container'>
                    <div className='input-div'>
                        <label className='input-label' htmlFor="name">Name:</label> 
                        <input type="text" id="name" name="name" placeholder="Enter crewmate's name" onChange={handleChange} />
                        
                    </div>

                    <div className='input-div'>
                        <label className='input-label' htmlFor="speed">Speed (mph):</label>
                        <input type="text" id="speed" name="speed" placeholder="Enter speed in mph" onChange={handleChange} />
                        
                    </div>

                    <div className='input-div'>
                        <label className='input-label' htmlFor="color">Color:</label>
                        <select id="color" name="color" onChange={handleChange} className='input-select'>
                            <option value="">Select a color</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="pink">Pink</option>
                            <option value="purple">Purple</option>
                            <option value="orange">Orange</option>
                            <option value="gray">Gray</option>
                            <option value="black">Black</option>
                        </select>
                        
                    </div>
                </div>
                
                <input type="submit" value="Create Crewmate!" />
            </form>
        </div>
    )
}

export default CreateCrewmate