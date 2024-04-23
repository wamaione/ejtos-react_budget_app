import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  
    const { totalExpensesBis } = useContext(AppContext);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far {totalExpensesBis}</span>
        </div>
    );
};

export default ExpenseTotal;


