import React from 'react';
import Image from 'next/image';
import classes from '../Actual/Actualitem.module.css';

// const actualdata = [
//   {image: '/images.hoode.png', title: 'Толстовки и худи'},
//   {image: '/images.hoode.png', title: 'Кроссовки'},
//   {image: '/images.hoode.png', title: 'Поясная сумка'},
// ];

function Actualitem(props) {
  const {image, title} = props.actualdata;
  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <Image
          src={image}
          alt={title}
          width={250}
          height={300}
          // layout="responsive"
        />
      </div>
      <h3>{title}</h3>
      <p>Узнать подробнее</p>
    </div>
  );
}

export default Actualitem;
