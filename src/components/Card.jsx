import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const colorMap = {
    red: "#e74c3c",
    blue: "#3498db",
    green: "#27ae60",
    yellow: "#f1c40f",
    pink: "#fd79a8",
    orange: "#e67e22",
    purple: "#8e44ad",
    black: "#222",
    gray: "#808080",
  // Add more mappings as needed
};

  const bgColor = colorMap[props.color] || "gray";

  return (
      <div className="Card" style={{ backgroundColor: bgColor }}>
          <Link to={'detail/' + props.id} className='detail-link'>
            <img src="/t-among-us.png" alt="" className='among_us_pic' />
          </Link>
          <h2 className="name">{"Name of Crewmate: " + props.name}</h2>
          <h3 className="color">{"Color of Crewmate: " + props.color}</h3>
          <p className="speed">{"Speed of Crewmate: " + props.speed + " mph"}</p>
          <Link to={'edit/'+ props.id}>
            <button>
              Edit Crewmate
            </button>
          </Link>
      </div>
  );
};

export default Card