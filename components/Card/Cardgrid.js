import React from 'react';
import Card from './Card';
import classes from './Cardgrid.module.css';

const Cardgrid = ({cards}) => (
  <div>
    <div className={classes.container}>
      <h2>Товары</h2>
      <div className={classes.grid}>
        {cards.map((cards) => (
          <Card key={cards.id} id={cards.id} cards={cards} />
        ))}
      </div>
    </div>
  </div>
);
export default Cardgrid;
