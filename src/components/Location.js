import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary' style={{ backgroundColor: 'lightgreen' }}> Currency {
      <select name="Location" id="Location" style={{ backgroundColor: 'lightgreen'}} onChange={event=>changeLocation(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="₹">₹ Rupee</option>
        <option value="€">€ Euro</option>
      </select>	  
      }	
    </div>
    );
};

export default Location;
