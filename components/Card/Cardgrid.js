import React from 'react';
import Card from './Card';
import classes from './Cardgrid.module.css';

function Cardgrid(props) {
  const {cards} = props;

  return (
    <div className={classes.container}>
      <h2>Товары</h2>
      <div className={classes.grid}>
        {cards.map((cards) => (
          <Card key={cards.arcticle} id={cards.id} cards={cards} />
        ))}
      </div>
    </div>
  );
}
{
}

export default Cardgrid;
