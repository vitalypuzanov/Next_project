import React from 'react';
import classes from './BlackButton.module.css';

function BlackButton({children}) {
  return (
    <div className={classes.container}>
      <button type="submit" className={`${classes.btn} ${classes.btn_dark}`}>
        {children}
      </button>
    </div>
  );
}

export default BlackButton;
