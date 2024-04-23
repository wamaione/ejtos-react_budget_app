import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
 
    const { budget } = useContext(AppContext);
{/*    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.cost));
    }, 0); */}

    return (
        <div className='alert alert-primary' style={{ backgroundColor : "#ddddd4"}} >
            <span >Budget: £ {budget}</span>
        {/*    <input type='number'></input> */}
        </div>
    );
};

export default Budget;
