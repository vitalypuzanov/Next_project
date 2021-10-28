import React from 'react';
import classes from './Card.module.css';
import Image from 'next/dist/client/image';

function Card(props) {
  const {image, title, description, price, size, article} = props.cards;

  {
    console.log(props.title);
  }

  // const imagePath = `/images/posts/${slug}/${image}`;
  // const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.card}>
      {/* <Link href={linkPath}> */}
      <a>
        <div className={classes.card_img}>
          <Image
            src={image}
            alt={title}
            width={250}
            height={300}
            // layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{price}</p>
          {/* <p>{size}</p>
          <p>{article}</p> */}
        </div>
      </a>
      {/* </Link> */}
    </li>
  );
}
export default Card;
