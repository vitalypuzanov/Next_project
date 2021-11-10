import React from 'react';
import classes from './Select.module.css';

function Select({options = []}) {
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
