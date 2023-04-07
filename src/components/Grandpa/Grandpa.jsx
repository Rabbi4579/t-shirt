import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Auntie from '../Auntie/Auntie';
import './grandpa.css'
export const RingContext = createContext('gold')
export const MoneyContext = createContext(0)
const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grand pa</h2>
            <p>Has money {money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
                <RingContext.Provider value='Golden'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Auntie ring={ring}></Auntie>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;