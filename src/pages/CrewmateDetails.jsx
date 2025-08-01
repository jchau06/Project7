
import { Link } from 'react-router-dom'
import './CrewmateDetails.css';

function CrewmateDetails(props) {
    const speed_ranges = [
        'Your crewmate is a bit slow, consider speeding them up!',
        'Your crewmate is a runner, they\'re a track star!',
        'Your crewmate is faster than Usain Bolt, they\'re a legend!'
    ];

    let speedRangeText = '';
    if (props.speed < 5) {
        speedRangeText = speed_ranges[0];
    } else if (props.speed < 30) {
        speedRangeText = speed_ranges[1];
    } else {
        speedRangeText = speed_ranges[2];
    }
    
    return (
        <div className='details-container'>
            <h1>Crewmate: {props.name}</h1>
            <h2>Stats:</h2>
            <h4>Color: {props.color}</h4>
            <h5>Speed: {props.speed + " mph"}</h5>
            <h6 className='speed-range'>{speedRangeText}</h6>
            <Link to={`/crewmate-gallery/edit/${props.id}`}>
                <button className='edit-button'>
                    Edit this crewmate?
                </button>
            </Link>
        </div>
    )
}

export default CrewmateDetails;