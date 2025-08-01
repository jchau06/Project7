import {useState} from 'react'
import { useParams } from 'react-router-dom'
import './EditCrewmate.css'

const EditCrewmate = ({ name, speed, color }) => {

    // const {id} = useParams()
    // const [post, setPost] = useState({id: null, title: "", author: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
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
                
                <input type="submit" value="Update Crewmate" />
                <input type="button" value="Delete Crewmate" className="deleteButton"/>
            </form>
        </div>
    )
}

export default EditCrewmate;