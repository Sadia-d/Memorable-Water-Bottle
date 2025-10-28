import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = () => {

    const [bottles , setBottles] = useState([]);

    useEffect(() =>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    } , [])


    return (
        <div>
            <h3>Bottles here : {bottles.length}</h3>

            <div>
                {
                    bottles.map(bottle => <Bottle bottle={bottle} ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;