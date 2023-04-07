import React from 'react';
import Cousin from '../Cousin/Cousin';

const Auntie = ({ring}) => {
    return (
        <div>
            <h2>Auntie</h2>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Nabir</Cousin>
            </section>
        </div>
    );
};

export default Auntie;