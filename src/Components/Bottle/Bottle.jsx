import React from 'react';
import './Bottle.css'

const Bottle = ({bottle,handleAddCart}) => { 
    const {name , img , price} = bottle;
    console.log(bottle);
    
    
    return (
        <div className='bottle'>
            <h3>Bottle : {name} </h3>
            <img src={img} alt="" srcset="" />
            <h5>Price : {price} $</h5>
            <button onClick={handleAddCart}>Purches</button>
        </div>
    );
};

export default Bottle;