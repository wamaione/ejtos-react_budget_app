import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
 
    const { budget } = useContext(AppContext);
{/*    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.cost));
    }, 0); */}

    return (
        <div className='alert alert-primary' style={{ backgroundColor : "#ddddd4"}} >
            <span >Budget: £ </span>
            <input type='number' min="0" max="20000" step="10" ></input>
        </div>
    );
};

export default Budget;
