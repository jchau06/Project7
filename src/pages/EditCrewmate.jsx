import {useState} from 'react'
import './EditCrewmate.css'
import { supabase } from "../client";

const EditCrewmate = ({ id, name, speed, color }) => {

    // const {id} = useParams()
    // const [post, setPost] = useState({id: null, title: "", author: "", description: ""})

    const [crewmate, setCrewmate] = useState({
        id: id,
        name: name,
        speed: speed,
        color: color
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

    const updateCrewmate = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
        .from('Crewmates')
        .update({ 
            name: crewmate.name,
            speed: parseFloat(crewmate.speed),
            color: crewmate.color
        })
        .eq('id', crewmate.id);

    if (error) {
        console.error('Error updating crewmate:', error);
        alert('Failed to update crewmate: ' + error.message);
        return;
    }

    console.log('Update successful:', data);
    window.location = "/crewmate-gallery";
    }

    const deleteCrewmate = async (event) => {
        const {data, error} = await supabase
            .from('Crewmates')
            .delete()
            .eq('id', crewmate.id);
        
        if (error) {
            console.error('Error deleting crewmate:', error);
            alert('Failed to delete crewmate: ' + error.message);
            return;
        }

        console.log('Delete successful:', data);
        window.location = "/crewmate-gallery";
    }


    return (
        <div className='create-crewmate-container'>
            <h1>
                Update Your Crewmate!
            </h1>
            <img className='among-us-img' src="/among_us.png"/>
            <div className='crewmate-info'>
                <h2>Current Crewmate Info:</h2>
                <h3>
                    {"Name: " + name + ", Speed: " + speed + ", Color: " + color}
                </h3>
            </div>
            <form className='create-crewmate-form'>
                
                <div className='input-container'>
                    <div className='input-div'>
                        <label className='input-label' htmlFor="name">Name:</label> 
                        <input type="text" id="name" name="name" placeholder="Enter crewmate's name" onChange={handleChange} value={crewmate.name}/>
                        
                    </div>

                    <div className='input-div'>
                        <label className='input-label' htmlFor="speed">Speed (mph):</label>
                        <input type="text" id="speed" name="speed" placeholder="Enter speed in mph" onChange={handleChange} value={crewmate.speed}/>
                        
                    </div>

                    <div className='input-div'>
                        <label className='input-label' htmlFor="color">Color:</label>
                        <select id="color" name="color" onChange={handleChange} className='input-select' value={crewmate.color}>
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
                
                <input type="submit" value="Update Crewmate" onClick={updateCrewmate}/>
                <input type="button" value="Delete Crewmate" className="deleteButton" onClick={deleteCrewmate}/>
            </form>
        </div>
    )
}

export default EditCrewmate;