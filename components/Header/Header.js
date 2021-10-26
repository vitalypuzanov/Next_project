import React from 'react';
import classes from '../Header/Header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__nav}>
        <Link href="/mens">Мужское</Link>
        <Link href="/women">Женское</Link>
      </div>
      <div className={classes.header__logo}>
        <Link href="/">
          <h1>Logotypre</h1>
        </Link>
      </div>
      <div className={classes.header__icon}>
        <div className={classes.header__icon_items}>
          <div className={classes.header__icon_item}>
            <img src="man-svgrepo-com.svg" alt="logo" />
            <span> Войти </span>
          </div>
          <div className={classes.header__icon_item}>
            <img src="./star-svgrepo-com.svg" alt="logo" />
            <span> 0 </span>
          </div>
          <div className={classes.header__icon_item}>
            <img src="./bag-svgrepo-com.svg" alt="logo" />
            <span> 0 </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
