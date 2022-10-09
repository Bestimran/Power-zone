import React, { useEffect, useState } from 'react';
import './Break.css'
import Swal from 'sweetalert2'

const Break = (props) => {
    const [a, setB]= useState(0);
    const {breakZone} = props;
    console.log(breakZone)
    let total = 0;
    for(const power of breakZone){
        total = total + power.time;
    }

    const addBreakTime = (even) =>{
        
        const breakTime = even.target.innerText;
        setB(breakTime);

        localStorage.setItem('time', JSON.stringify(breakTime));
    }

    useEffect(()=>{
        const time = JSON.parse(localStorage.getItem('time'));
        setB(time);
    },[])

    const watch =()=>{
        Swal.fire('Activity Completed!!!')
    }
  
    return (
        <div>
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
                    <div className='break'><span onClick={(even)=>addBreakTime(even)}>60</span>s</div>
                    <div className='break'><span onClick={(even)=>addBreakTime(even)}>50</span>s</div>
                    <div className='break'><span onClick={(even)=>addBreakTime(even)}>40</span>s</div>
                    <div className='break'><span onClick={(even)=>addBreakTime(even)}>30</span>s</div>
                    <div className='break'><span onClick={(even)=>addBreakTime(even)}>20</span>s</div>
                </div>
                   
                <h5>Exercise Details:</h5>
                <div className='exercise'>
                <div>Exercise time</div>
                <div className='seconds'> {total} seconds</div>
                </div>
                <div className='exercise'>
                <div>Break time</div>
                <div className='seconds'>{a}seconds</div>
                </div>
                <button className='btn-Activity' onClick={watch}>Activity Completed</button>
        </div>
    );
};

export default Break;