import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Thisrt from '../Tshirt/Thisrt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
         if(exists){
           toast('already add')
           return exists;
         }
         else{
            const newCart = [...cart, tshirt]
            setCart(newCart)
       
         }
            const newCart = [...cart, tshirt]
            setCart(newCart)
       
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <Thisrt key={tshirts._id} tshirt={tshirt} handleAddToCart={handleAddToCart} ></Thisrt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;