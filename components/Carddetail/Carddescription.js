import React from 'react';
import Image from 'next/dist/client/image';
import classes from '../Carddetail/Carddescription.module.css';

function Carddescription() {
  return (
    <div className={classes.container}>
      <div className={classes.ditails}>
        <div className={classes.ditails_title}>
          <h3>Fendi</h3>
          <p>двусторонняя стеганая куртка</p>
        </div>
        <div className={classes.ditails_description}>
          <h3>Подробнее о товаре</h3>
          <ul>
            <li>цвет: синий</li>
            <li>эластичный хлопок</li>
            <li>эффект потертости</li>
            <li>узкий крой</li>
          </ul>
        </div>
      </div>
      <div className={classes.ditails}>
        <div classNam={classes.composition}>
          <h4>Состав</h4>
          <p>Хлопок 92%, Эластан 8%</p>
        </div>
        <div classNam={classes.recomendation}>
          <h4>Рекомендации по уходу</h4>
          <p>Только сухая чистка</p>
        </div>
        <div classNam={classes.article}>
          <h4>Артикул дизайнера</h4>
          <p>XMD001</p>
        </div>
        <div classNam={classes.model}>
          <h4>Модель и образ</h4>
          <p>Рост модели: 1,86 м.</p>
        </div>
      </div>
      <div className={classes.img}>
        <Image src="/image/main.webp" alt="img" width={400} height={400} />
      </div>
    </div>
  );
}

export default Carddescription;
