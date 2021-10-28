import React from 'react';
import Cardgrid from './Cardgrid';
import classes from './Allcards.module.css';

function Allcards() {
  return (
    <section className={classes.cards}>
      <h1>All Posts</h1>
      <Cardgrid posts={props.cards} />
    </section>
  );
}

export default Allcards;
