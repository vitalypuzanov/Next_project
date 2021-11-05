import React from 'react';
import classes from './Blackbtn.module.css';

function Blackbtn({children}) {
  return (
    <div className={classes.container}>
      <button type="submit" className={`${classes.btn} ${classes.btn_dark}`}>
        {children}
      </button>
    </div>
  );
}

export default Blackbtn;
