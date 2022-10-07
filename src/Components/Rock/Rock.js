import React from 'react';
import './Rock.css';

const Rock = (props) => {
    
    const {img, title, comment, time, age}= props.power;
   
    return (
        
        <div className='Images-area'>
            <img src={img} alt="" />
            <p className='description'>{title}</p>
            <p className='description'><small>{comment}</small></p>
            <p className='description'>age : {age}</p>
            <p className='description'>time : {time}s</p>
            <button className='btn-list'>Add to list</button>

        </div>
    );
};

export default Rock;