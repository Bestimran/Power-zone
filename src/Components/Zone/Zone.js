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
                <div className='activity'>
                <div className='icons'><input type="text" placeholder='M I'/></div>
                <div className='details'>
                    <h4>M Imran</h4>
                    <p>sylhet, Bangladesh.</p>
                </div>
                </div>
                <div className='height'>
                    <div>
                        <p className='bold'>65 <span>kg</span></p>
                        <p className='bold-2'>Weight</p>
                    </div>
                    <div>
                        <p className='bold'>5.6</p>
                        <p className='bold-2'>Height</p>
                    </div>
                    <div>
                        <p className='bold'>23 <span>yrs</span></p>
                        <p className='bold-2'>Age</p>
                    </div>
                </div>

                <p className='take'>take a Break</p>
                <div className='Break-time'>
                    <div className='break'>15s</div>
                    <div className='break'>25s</div>
                    <div className='break'>35s</div>
                    <div className='break'>45s</div>
                    <div className='break'>55s</div>
                </div>
                   

                <h5>Exercise Details</h5>
                <div className='exercise'>
                <div>Exercise time</div>
                <div className='seconds'>100 seconds</div>
                </div>
                <div className='exercise'>
                <div>Break time</div>
                <div className='seconds'>15 seconds</div>
                </div>
                <button className='btn-Activity'>Activity Completed</button>
                </div>
        </div>
    );
};

export default Zone;