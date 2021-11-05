import React from 'react';
import Select from '../UI/Select';
import classes from '../Carddetail/Carddetail.module.css';
import Blackbtn from '../UI/Blackbtn';
import Whitebtn from '../UI/Whitebtn';
import Image from 'next/image';
import Carddescription from './Carddescription';

function Carddetail(props) {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.img}>
          <Image src={props.image} alt={props.image} width={450} height={550} />
        </div>
        <div className={classes.info}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>{props.price}</p>
          <div className={classes.info_but}>
            <Blackbtn>Купить</Blackbtn>
            <Whitebtn>Положить в корзину</Whitebtn>
          </div>
          <Select></Select>
          <h2>Описание</h2>
          <p>{props.fulldescription}</p>
        </div>
      </div>
      <Carddescription image={props.image}></Carddescription>
    </div>
  );
}

export default Carddetail;
