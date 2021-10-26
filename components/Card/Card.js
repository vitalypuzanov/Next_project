import React from 'react';
import classes from './Card.module.css';

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.card_img}>
        <img
          src="https://cdn.aizel.ru/i/1311353.jpg"
          className={classes.card_img_first}
          alt=""></img>
        {/* <img
          src="https://cdn.aizel.ru/i/1078030.jpg"
          className={classes.card_img_second}
          alt=""></img> */}
      </div>
      <div className={classes.card_info}>
        <div className={classes.card_title}>Burberry</div>
        <div className={classes.card_description}>Темные синие брюки</div>
        <div className={classes.card_price}>412$</div>
        <div className={classes.card_size}>
          <span>S M L Xl </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
