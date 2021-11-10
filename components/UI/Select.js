import React from 'react';
import classes from './Select.module.css';

const options = [
  {value: '0', label: 'Выберите размер'},
  {value: '1', label: 'Xs'},
  {value: '2', label: 'S'},
  {value: '3', label: 'M'},
];

function Select() {
  return (
    <div>
      <div className={classes.custom_select}>
        <select>
          {options.map((options) => (
            <option ket={options.label} value={options.value}>
              {options.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
