import React, {Fragment} from 'react';
import СategoriesItem from './СategoriesItem';

import classes from './СategoriesGrid.module.css';
const СategoriesGrid = ({actualdata}) => (
  <Fragment>
    <div className={classes.title}>
      <h2>Категории</h2>
    </div>
    <div className={classes.container}>
      {actualdata.map((data) => (
        <СategoriesItem key={data.image} actualdata={data} />
      ))}
    </div>
  </Fragment>
);

export default СategoriesGrid;
