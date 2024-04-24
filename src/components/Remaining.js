import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  
    const { remaining } = useContext(AppContext);
    return (
        <div className='alert alert-primary' style={{ backgroundColor : "#ccffcc"}}>
            <span>Remaining £{remaining} </span>
        </div>
    );
};

export default Remaining;

