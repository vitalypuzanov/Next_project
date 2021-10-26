import React from 'react';
import Link from 'next/link';

import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      <div class={classes.footer_logo}>
        <div className={classes.footer_logo_main}>
          <h1>Logotype</h1>
        </div>
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
      </div>

      <div className={classes.footer_contact}>
        <div className={classes.footer_contact_title}>
          <h3>СЛУЖБА ЗАБОТ</h3>
        </div>
        <div className={classes.footer_contact_numbers}>
          <a
            href="tel:+1234567890"
            className={classes.footer_contact_numbers_item}>
            1234567890{' '}
          </a>
          <a
            href="tel:+1234567890"
            className={classes.footer_contact_numbers_item}>
            1234567890{' '}
          </a>
        </div>
        <div className={classes.footer_logo_social}>
          <a href="asd">
            {' '}
            <img
              src="./telegram-svgrepo-com.svg"
              className={classes.footer_logo_social_item}
              alt=""
            />{' '}
          </a>
          <a href="asd">
            {' '}
            <img
              src="./viber-svgrepo-com.svg"
              className={classes.footer_logo_social_item}
              alt=""
            />{' '}
          </a>
          <a href="asdas">
            {' '}
            <img
              src="./whatsapp-svgrepo-com.svg"
              className={classes.footer_logo_social_item}
              alt=""
            />{' '}
          </a>
        </div>
      </div>

      <div className={classes.footer_nav}>
        <h3>ПОКУПАТЕЛЯМ</h3>
        <Link href="/mens">
          <p>Доставка</p>
        </Link>
        <Link href="/mens">
          <p>Оплата</p>
        </Link>
        <Link href="/mens">
          <p>Возврат</p>
        </Link>
        <Link href="/mens">
          <p>Частые вопросы</p>
        </Link>
      </div>

      <div className={classes.footer_nav}>
        <h3>КОМПАНИЯ</h3>
        <Link href="/mens">
          <p>О нас</p>
        </Link>
        <Link href="/mens">
          <p>Концепт</p>
        </Link>
        <Link href="/mens">
          <p>Сотруднечество</p>
        </Link>
        <Link href="/mens">
          <p>Контакты</p>
        </Link>
      </div>

      <div className={classes.footer_nav}>
        <h3>ПРАВОВАЯ ИНФОРМАЦИЯ</h3>
        <Link href="/mens">
          <p>Оферта</p>
        </Link>
        <Link href="/mens">
          <p>Обработка личных</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
