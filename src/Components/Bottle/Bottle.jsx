import React from 'react';
import 

const Bottle = ({bottle}) => { 
    const {name , img , price} = bottle;
    
    return (
        <div className='bottle'>
            <h2>Bottle : {name} </h2>
            <img src={img} alt="" srcset="" />
            <p>Price : {price}</p>
        </div>
    );
};

export default Bottle;