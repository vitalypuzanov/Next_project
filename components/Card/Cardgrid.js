import React from 'react';
import Card from './Card';
import classes from './CardGrid.module.css';

const CardGrid = ({cards}) => (
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
export default CardGrid;
