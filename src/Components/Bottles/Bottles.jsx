import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = () => {

    const [bottles , setBottles] = useState([]);
    const[cart , setCart]=useState([])

    useEffect(() =>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    } , [])

    const handleAddCart = (bottle) =>{
        const alreadyAded = cart.find((b) => b.name === bottle.name)
        if(alreadyAded){
            alert('already add this')
            return
        }
        setCart(p =>[...p , bottle ])
    }

    return (
        <div>
            <h3>Bottles here : {bottles.length}</h3>
            <h4>Cart : {cart.length} </h4>

            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle 
                        handleAddCart={handleAddCart}
                        bottle={bottle} ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;