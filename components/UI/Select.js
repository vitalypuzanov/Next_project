import React from 'react';
import classes from './Select.module.css';

function Select() {
  return (
    <div>
      <div className={classes.custom_select}>
        <select>
          <option value="0">Выберите размер:</option>
          <option value="1">Xs</option>
          <option value="2">S</option>
          <option value="3">M</option>
          <option value="4">L</option>
          <option value="5">Xl</option>
        </select>
      </div>
    </div>
  );
}

export default Select;
