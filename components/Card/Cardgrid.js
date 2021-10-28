import React from 'react';
import Card from './Card';
import classes from './Cardgrid.module.css';

function Cardgrid(props) {
  const {cards} = props;
  console.log(cards);

  return (
    <div className={classes.container}>
      <h2>Товары</h2>
      <div className={classes.grid}>
        {cards.map((cards) => (
          <Card key={cards.arcticle} cards={cards} />
        ))}
      </div>
    </div>
  );
}
{
}

export default Cardgrid;
