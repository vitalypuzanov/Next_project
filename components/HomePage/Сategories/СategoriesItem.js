import React from 'react';
import Image from 'next/image';
import classes from './СategoriesItem.module.css';
import Blackbtn from '../../UI/Blackbtn';

function СategoriesItem(props) {
  const {image, title} = props.actualdata;
  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <Image src={image} alt={title} width={250} height={300} />
      </div>
      <h3>{title}</h3>
      <Blackbtn>Просмотреть</Blackbtn>
    </div>
  );
}

export default СategoriesItem;
