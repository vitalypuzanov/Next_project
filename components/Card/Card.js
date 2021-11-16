import React from 'react';
import {useRouter} from 'next/router';
import Image from 'next/dist/client/image';

import classes from './Card.module.css';

function Card({cards}) {
  const router = useRouter();
  const {image, title, description, price, id} = cards;

  const showDetailsHandler = () => {
    router.push(id);
  };

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
