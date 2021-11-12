import React from 'react';
import Image from 'next/image';
import classes from './Main.module.css';
import BlackButton from '../UI/BlackButton';

const maindata = [
  {
    image: '/image/main.webp',
    id: '1',
    title: 'ВОКРУГ СВЕТА С BURBERRY',
    text: 'Для нового осенне-зимнего сезона Burberry впервые сделали из габардина не только тренчи, но и технологичные пуховики и жилеты. В честь выхода коллекции мы объединились с британским брендом и платформой DressX, которая создает виртуальную одежду, чтобы отправить новинки в путешествие. Оцените лучшие модели и узнайте больше о жизни вдали от большого города и Burberry от героев нашей съемки.',
    style: '',
  },
  {
    image: '/image/main2.webp',
    id: '2',
    title: 'Подарок как искусство',
    text: 'Для нового осенне-зимнего сезона Burberry впервые сделали из габардина не только тренчи, но и технологичные пуховики и жилеты. В честь выхода коллекции мы объединились с британским брендом и платформой DressX, которая создает виртуальную одежду, чтобы отправить новинки в путешествие. Оцените лучшие модели и узнайте больше о жизни вдали от большого города и Burberry от героев нашей съемки.',
    style: 'clases.reverse',
  },
];

const Main = () => (
  <>
    {maindata.map((maindata) => (
      <div
        key={maindata.id}
        className={`${classes.container} ${maindata.style}`}>
        <div className={classes.container_img}>
          <Image
            src={maindata.image}
            alt="img"
            width={800}
            height={800}
            layout="responsive"
          />
        </div>
        <div className={classes.container_info}>
          <h2>{maindata.title}</h2>
          <p>{maindata.text}</p>
          <BlackButton>Узнать больше</BlackButton>
        </div>
      </div>
    ))}
  </>
);

export default Main;
