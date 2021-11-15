import React from 'react';
import classes from './WhiteButton.module.css';

function WhiteButton({children}) {
  return (
    <div>
      <button className={`${classes.btn} ${classes.btn_dark}`}>
        {children}
      </button>
    </div>
  );
}

export default WhiteButton;
