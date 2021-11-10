import React from 'react';
import Select from '../UI/Select';
import classes from '../Carddetail/Carddetail.module.css';
import Blackbtn from '../UI/Blackbtn';
import Whitebtn from '../UI/Whitebtn';
import Image from 'next/image';
import Carddescription from './Carddescription';

function Carddetail(props) {
  const {image, title, description, price, fulldescription} = props;
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.img}>
          <Image src={image} alt={props.image} width={450} height={550} />
        </div>
        <div className={classes.info}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className={classes.info_but}>
            <Blackbtn>Купить</Blackbtn>
            <Whitebtn>Положить в корзину</Whitebtn>
          </div>
          <Select></Select>
          <h2>Описание</h2>
          <p>{fulldescription}</p>
        </div>
      </div>
      <Carddescription image={image}></Carddescription>
    </div>
  );
}

export default Carddetail;
