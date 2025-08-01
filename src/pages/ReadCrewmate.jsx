import { useState, useEffect } from 'react'
import Card from '../components/Card'
import './ReadCrewmate.css'

const ReadCrewmate = (props) => {

    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {
        setCrewmates(props.data)
    }, [props])
    
    return (
        <div className="ReadPosts">
            {
                crewmates && crewmates.length > 0 ?
                [...crewmates]
                .sort((a, b) => a.id - b.id)
                .map((crewmate,index) => 
                    <Card 
                        key={crewmate.id}
                        id={crewmate.id} 
                        name={crewmate.name}
                        color={crewmate.color}
                        speed={crewmate.speed}
                    />
                ) : <h2>{'No Crewmates have been created yet.'}</h2>
            }
        </div>  
    )
}

export default ReadCrewmate