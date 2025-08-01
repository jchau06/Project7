// import { useState, useEffect } from 'react'
import Card from '../components/Card'
import './ReadCrewmate.css'
// import { supabase } from "../client";
// import { useState, useEffect } from 'react';

const ReadCrewmate = ({ data }) => {
  return (
    <div className="ReadPosts">
      {
        data && data.length > 0 ?
        [...data]
        .sort((a, b) => a.id - b.id)
        .map((crewmate) => 
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
  );
};

export default ReadCrewmate