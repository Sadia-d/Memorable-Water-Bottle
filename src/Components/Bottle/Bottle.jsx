import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => { 
    const {name , img , price} = bottle;
    
    return (
        <div className='bottle'>
            <h3>Bottle : {name} </h3>
            <img src={img} alt="" srcset="" />
            <h5>Price : {price}</h5>
        </div>
    );
};

export default Bottle;