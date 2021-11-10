import React from 'react';
import Select from '../UI/Select';
import classes from '../Carddetail/Carddetail.module.css';
import BlackButton from '../UI/BlackButton';
import WhiteButton from '../UI/WhiteButton';

import Image from 'next/image';
import CardDescription from './CardDescription';

const options = [
  {value: '0', label: 'Выберите размер'},
  {value: '1', label: 'Xs'},
  {value: '2', label: 'S'},
  {value: '3', label: 'M'},
];

function Carddetail({image, title, description, price, fulldescription}) {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.img}>
          <Image src={image} alt={image} width={450} height={550} />
        </div>
        <div className={classes.info}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className={classes.info_but}>
            <BlackButton>Купить</BlackButton>
            <WhiteButton>Положить в корзину</WhiteButton>
          </div>
          <Select options={options}></Select>
          <h2>Описание</h2>
          <p>{fulldescription}</p>
        </div>
      </div>
      <CardDescription image={image}></CardDescription>
    </div>
  );
}

export default Carddetail;
