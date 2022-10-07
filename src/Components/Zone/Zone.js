import React, { useEffect, useState } from 'react';
import Rock from '../Rock/Rock';
import './Zone.css';


const Zone = () => {
    const [Powers, setPower] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPower(data))
    },[])

    return (
        <div className='Power-zone'>
            <div className='Power-area'>
                {
                   Powers.map(power =><Rock 
                    key={power.id}
                    power={power}
                    ></Rock>) 
                }
            </div>
            <div className='Activity-zone'>
                
            </div>
        </div>
    );
};

export default Zone;