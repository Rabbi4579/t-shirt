import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    
    let message;
    if(cart.length === 0){
        message = <p>Please add sum product</p>
    }
    else{
        message = <div>
            <h2>Boroloxx</h2>
            <p>Thank you for giving money</p>
        </div>
    }


    return (
        <div>
            <h2 className={cart.length === 1 ? 'red' : 'blue'}>Order summaray {cart.length}</h2>
            <p className={`bold ${cart.length === 3 ? 'pink' : 'purple'}`}>Something</p>
            {cart.length > 2 ? <span>Aro kino</span> : <span>Fokira</span>}
            {message}
           
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonus!!!</p>
            }
            {
                cart.length === 3 || <h2>Tinta hoy ni!!!</h2>
            }
        </div>
    );
};

export default Cart;