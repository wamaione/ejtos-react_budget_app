import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Budget = () => {
 
    const { totalExpensesBis, currency } = useContext(AppContext);

    return (
        <div className='alert alert-primary' style={{ backgroundColor : "#ddddd4"}} >
            <span >Budget: {currency}</span>
            <input type='number' id="budgetField" defaultValue = "2000" min="0" max="20000" step="10" onClick={ () => {
                let currentValue = document.getElementById("budgetField").value;;
                if( totalExpensesBis >= currentValue)
                {
                    alert(`You cannot reduce the budget value lower than the spending`);
                }
            } }></input>
        </div>
    );
};

export default Budget;
