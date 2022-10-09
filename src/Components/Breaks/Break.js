import React from 'react';
import './Break.css'

const Break = (props) => {
    const {breakZone} = props;
    console.log(breakZone)
    let total = 0;
    for(const power of breakZone){
        total = total + power.time;
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
                    <div className='break'>15s</div>
                    <div className='break'>25s</div>
                    <div className='break'>35s</div>
                    <div className='break'>45s</div>
                    <div className='break'>55s</div>
                </div>
                   

                <h5>Exercise Details:</h5>
                <div className='exercise'>
                <div>Exercise time</div>
                <div className='seconds'> {total}seconds</div>
                </div>
                <div className='exercise'>
                <div>Break time</div>
                <div className='seconds'>00 seconds</div>
                </div>
                <button className='btn-Activity'>Activity Completed</button>
        </div>
    );
};

export default Break;