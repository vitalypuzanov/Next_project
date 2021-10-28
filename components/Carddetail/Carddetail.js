import React from 'react';
import Select from '../UI/Select';
import classes from '../Carddetail/Carddetail.module.css';
import Blackbtn from '../UI/Blackbtn';
import Whitebtn from '../UI/Whitebtn';
import Image from 'next/image';
import Carddescription from './Carddescription';

function Carddetail() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.img}>
          <Image src="/image/main.webp" alt="img" width={400} height={400} />
          <Image src="/image/main.webp" alt="img" width={400} height={400} />
          <Image src="/image/main.webp" alt="img" width={400} height={400} />
          <Image src="/image/main.webp" alt="img" width={400} height={400} />
        </div>
        <div className={classes.info}>
          <h2>Fendi</h2>
          <p>двусторонняя стеганая куртка</p>
          <p>285 000 ₽</p>
          <div className={classes.info_but}>
            <Blackbtn>Купить</Blackbtn>
            <Whitebtn>Положить в корзину</Whitebtn>
          </div>
          <Select></Select>
          <h2>Описание</h2>
          <p>
            Полупальто Camden изготовлено из габардина с подкладкой в фирменную
            клетку Burberry. Однобортная модель приталенного кроя с потайной
            застежкой на пуговицы, крючком на воротнике и боковыми карманами на
            пуговицах. Дизайн вдохновлен архивными силуэтами ХХ века для
            водителей открытых автомобилей, когда одежда должна была защищать от
            плохих погодных условий.
          </p>
        </div>
      </div>
      <Carddescription></Carddescription>
    </div>
  );
}

export default Carddetail;
