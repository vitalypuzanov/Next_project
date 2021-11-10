import React from 'react';
import Image from 'next/dist/client/image';
import {useRouter} from 'next/router';

import classes from './Card.module.css';

function Card(props) {
  const router = useRouter();
  const {image, title, description, price} = props.cards;

  function showDetailsHandler() {
    router.push(props.id);
  }

  return (
    <li onClick={showDetailsHandler} className={classes.card}>
      <a>
        <div className={classes.card_img}>
          <Image src={image} alt={title} width={250} height={300} />
        </div>
        <div className={classes.content}>
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </a>
    </li>
  );
}
export default Card;
