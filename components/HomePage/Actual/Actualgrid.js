import React, {Fragment} from 'react';
import Actualitem from './Actualitem';

import classes from '../Actual/Actualgrid.module.css';

function Actualgrid(props) {
  const {actualdata} = props;
  return (
    <Fragment>
      <div className={classes.h2}>
        <h2>Актуальное</h2>
      </div>
      <div className={classes.grid}>
        {actualdata.map((actualdata) => (
          <Actualitem key={actualdata.title} actualdata={actualdata} />
        ))}
      </div>
    </Fragment>
  );
}

export default Actualgrid;
