import React from 'react';
import classes from './Whitebtn.module.css';

function Whitebtn({children}) {
  return (
    <div>
      <div className={`${classes.btn} ${classes.btn_dark}`}>{children}</div>
    </div>
  );
}

export default Whitebtn;
