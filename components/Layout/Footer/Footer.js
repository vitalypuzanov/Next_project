import React from 'react';
import Link from 'next/link';

import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      <div class={classes.footer_logo}>
        <div className={classes.footer_logo_main}>
          <div>
            <h1>Logotype</h1>
          </div>
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
          <div>
            <h3>СЛУЖБА ЗАБОТ</h3>
          </div>
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

      <nav className={classes.footer_nav}>
        <div>
          <h3>ПОКУПАТЕЛЯМ</h3>
        </div>
        <ul>
          <Link href="/mens">
            <li>Доставка</li>
          </Link>
          <Link href="/mens">
            <li>Оплата</li>
          </Link>
          <Link href="/mens">
            <li>Возврат</li>
          </Link>
          <Link href="/mens">
            <li>Частые вопросы</li>
          </Link>
        </ul>
      </nav>

      <nav className={classes.footer_nav}>
        <div>
          <h3>КОМПАНИЯ</h3>
        </div>
        <ul>
          <Link href="/mens">
            <li>О нас</li>
          </Link>
          <Link href="/mens">
            <li>Концепт</li>
          </Link>
          <Link href="/mens">
            <li>Сотруднечество</li>
          </Link>
          <Link href="/mens">
            <li>Контакты</li>
          </Link>
        </ul>
      </nav>

      <nav className={classes.footer_nav}>
        <div>
          <h3>ПРАВОВАЯ ИНФОРМАЦИЯ</h3>
        </div>
        <ul>
          <Link href="/mens">
            <li>Оферта</li>
          </Link>
          <Link href="/mens">
            <li>Обработка личных</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
