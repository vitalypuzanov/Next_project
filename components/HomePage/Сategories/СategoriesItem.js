import React from 'react';
import Image from 'next/image';
import classes from './СategoriesItem.module.css';
import BlackButton from '../../UI/BlackButton';

function СategoriesItem({actualdata}) {
  const {image, title} = actualdata;
  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <Image src={image} alt={title} width={250} height={300} />
      </div>
      <h3>{title}</h3>
      <BlackButton>Просмотреть</BlackButton>
    </div>
  );
}

export default СategoriesItem;
