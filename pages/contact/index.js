import React from 'react';
import classes from '../contact/index.module.css';
import Link from 'next/dist/client/link';
import Contactform from '../../components/HomePage/Actual/Contactform';

function index() {
  return (
    <div>
      <h2>Контакты</h2>
      <h3>Служба заботы о клиентах</h3>
      <p>
        Наши специалисты будут рады ответить вам ежедневно с 10:00 до 22:00 по
        московскому времени.
      </p>
      <h4>Пишите нам в чат:</h4>
      <div className={classes.footer_logo_social}>
        <Link href="instagram.com">
          <img src="./instagram-svgrepo-com.svg" alt="" />
        </Link>
        <Link href="facebook">
          <img src="./facebook-svgrepo-com.svg" alt="" />
        </Link>
        <Link href="vk">
          <img src="./vk-svgrepo-com.svg" alt="" />
        </Link>
      </div>
      <div>Звоните </div>
      <div className={classes.footer_contact_numbers}>
        <a
          href="tel:+375333515842"
          className={classes.footer_contact_numbers_item}>
          + 375-33-351-58-42{' '}
        </a>
        <a
          href="tel:+375333515842"
          className={classes.footer_contact_numbers_item}>
          + 375-33-351-58-42{' '}
        </a>
      </div>
      <div>
        <a href="mailto: abc@example.com">Send Email</a>
      </div>
      <Contactform></Contactform>
    </div>
  );
}

export default index;
