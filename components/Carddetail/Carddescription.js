import React from 'react';
import Image from 'next/dist/client/image';
import classes from '../CardDetail/CardDescription.module.css';

const description = [
  {
    title: 'Состав',
    value: 'Хлопок 92%, Эластан 8%',
  },
  {
    title: 'Рекомендации по уходу',
    value: 'Только сухая чистка%',
  },
  {
    title: 'Артикул дизайнера',
    value: 'XMD001',
  },
  {
    title: 'Модель и образ',
    value: 'Рост модели: 1,86 м.',
  },
];

const CardDescription = ({image}) => (
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
      {description.map((description) => (
        <div key={description.title}>
          <h4>{description.title}</h4>
          <p>{description.value}</p>
        </div>
      ))}
    </div>
    <div className={classes.img}>
      <Image src={image} alt="img" width={400} height={400} />
    </div>
  </div>
);

export default CardDescription;
