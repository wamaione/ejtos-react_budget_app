import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle } from 'react-icons/fa';
import { FaPlusCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleSubtract10 = () => {
        const item = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };

    const handleAdd10 = () => {
        const item = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleAdd10}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleSubtract10}></FaMinusCircle></td>
        
        </tr>
    );
};

export default ExpenseItem;
