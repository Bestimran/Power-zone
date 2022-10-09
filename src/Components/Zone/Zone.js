import React, { useEffect, useState } from 'react';
import Break from '../Breaks/Break';
import Rock from '../Rock/Rock';
import './Zone.css';


const Zone = () => {
    const [Powers, setPower] = useState([]);
    const [breakZone, setBreakZone] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPower(data))
    },[])

    const AddToCart = (power) => {
        const newZone = [...breakZone, power ];
        setBreakZone(newZone);

        
    }


    return (
        <div className='Power-zone'>
            <div className='Power-area'>
                {
                   Powers.map(power =><Rock 
                    key={power.id}
                    power={power}
                    AddToCart={AddToCart}
                    ></Rock>) 
                }
            </div>
            <div className='Activity-zone'>
                <Break breakZone={breakZone} ></Break>
                
                </div>
        </div>
    );
};

export default Zone;