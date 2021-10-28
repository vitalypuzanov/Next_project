import React from 'react';
import classes from './Blackbtn.module.css';

function Blackbtn({children}) {
  return (
    <div className={classes.container}>
      <div className={`${classes.btn} ${classes.btn_dark}`}>{children}</div>
    </div>
  );
}

export default Blackbtn;
