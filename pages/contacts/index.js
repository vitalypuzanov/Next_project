import React from 'react';
import Link from 'next/dist/client/link';

import Contactform from '../../components/HomePage/Contact/Contactform';
import Sidenav from '../../components/Layout/Navigation/Sidenav/Sidenav';

import classes from './index.module.css';

function index() {
  return (
    <>
      <div className={classes.wrapper}>
        <Sidenav className={classes.sidenav}></Sidenav>
        <div className={classes.container}>
          <h2>Контакты</h2>
          <h3>Служба заботы о клиентах</h3>
          <p>
            Наши специалисты будут рады ответить вам ежедневно с 10:00 до 22:00
            по московскому времени.
          </p>
          <h4>Пишите нам в чат:</h4>
          <div className={classes.footer_logo_social}>
            <a className={classes.footer_logo_social_item} href="viper.com">
              Viber
              <img
                src="./viber-svgrepo-com.svg"
                className={classes.footer_logo_social_item}
                alt=""
              />
            </a>
            <a className={classes.footer_logo_social_item}>
              Facebook
              <img
                src="./facebook-svgrepo-com.svg"
                className={classes.footer_logo_social_item}
                alt=""
              />
            </a>
            <a className={classes.footer_logo_social_item}>
              Instagram
              <img
                src="./instagram-svgrepo-com.svg"
                className={classes.footer_logo_social_item}
                alt=""
              />
            </a>
            <a className={classes.footer_logo_social_item}>
              Telegram
              <img
                src="./telegram-svgrepo-com.svg"
                className={classes.footer_logo_social_item}
                alt=""
              />
            </a>
          </div>
          <div>Звоните </div>
          <div className={classes.footer_contact_numbers}>
            <div>
              <a
                href="tel:+375333515842"
                className={classes.footer_contact_numbers_item}>
                + 375-33-351-58-42{' '}
              </a>
            </div>
            <div>
              <a
                href="tel:+375333515842"
                className={classes.footer_contact_numbers_item}>
                + 375-33-351-58-42{' '}
              </a>
            </div>
          </div>
          <div>
            <a href="mailto: abc@example.com">Send Email</a>
          </div>
          <h3>Электронная почта:</h3>
          <p>call@aizel.ru</p>
          <h3>Бутик и пункт выдачи заказов</h3>
          <p>
            Москва, улица Большая Дмитровка, 18с2 или Столешников переулок, 10с3
          </p>
          <p>
            Понедельник — Воскресенье с 11:00 до 22:00{' '}
            <p>Телефон: 8 (495) 629 95 01</p>
          </p>
          <h3>Партнерам</h3>
          <Link href="/partner"> Условия сотрудничества</Link>
        </div>
      </div>
      <Contactform></Contactform>
    </>
  );
}

export default index;
