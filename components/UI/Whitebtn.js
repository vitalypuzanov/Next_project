import React from 'react';
import classes from './Whitebtn.module.css';

function Whitebtn({children}) {
  return (
    <div>
      <button className={`${classes.btn} ${classes.btn_dark}`}>
        {children}
      </button>
    </div>
  );
}

export default Whitebtn;
