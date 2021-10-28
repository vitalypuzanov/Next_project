import React from 'react';
import Image from 'next/image';
import classes from './Main.module.css';
import Blackbtn from '../UI/Blackbtn';

function Main() {
  return (
    // <div>

    // </div>
    <div className={classes.container}>
      <div className={classes.container_img}>
        <Image
          src="/image/main.webp"
          alt="img"
          width={800}
          height={800}
          //   layout="responsive"
        />
      </div>

      <div className={classes.container_info}>
        <h2>ВОКРУГ СВЕТА С BURBERRY</h2>
        <p>
          Для нового осенне-зимнего сезона Burberry впервые сделали из габардина
          не только тренчи, но и технологичные пуховики и жилеты. В честь выхода
          коллекции мы объединились с британским брендом и платформой DressX,
          которая создает виртуальную одежду, чтобы отправить новинки в
          путешествие. Оцените лучшие модели и узнайте больше о жизни вдали от
          большого города и Burberry от героев нашей съемки.
        </p>
        <Blackbtn>Узнать больше</Blackbtn>
      </div>
    </div>
  );
}

export default Main;
