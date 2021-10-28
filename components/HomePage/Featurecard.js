import React from 'react';
import Cardgrid from '../Card/Cardgrid';
import classes from '../HomePage/Featurecard.module.css';

function Featurecard() {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <Cardgrid posts={props.posts} />
    </section>
  );
}

export default Featurecard;
