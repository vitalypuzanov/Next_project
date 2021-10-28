import React from 'react';
import classes from '../Header/Header.module.css';
import Link from 'next/link';
import Nav from '../Navigation/Nav';
import image from 'next/image';

function Header() {
  return (
    <header>
      <div className={classes.header}>
        <div className={classes.header__nav}>
          <Link href="/card">Мужское</Link>
          <Link href="/women">Женское</Link>
        </div>
        <div className={classes.header__logo}>
          <Link href="/">
            {/* <Image
              src="/image/zara.png"
              alt="img"
              width={400}
              height={200}
              layout="responsive"
            /> */}
            <h1>Logotypre</h1>
          </Link>
        </div>
        <div className={classes.header__icon}>
          <div className={classes.header__icon_items}>
            <div className={classes.header__icon_item}>
              <img src="man-svgrepo-com.svg" alt="logo" />
              <span> </span>
            </div>
            <div className={classes.header__icon_item}>
              <img src="./star-svgrepo-com.svg" alt="logo" />
              <span> </span>
            </div>
            <div className={classes.header__icon_item}>
              <img src="./bag-svgrepo-com.svg" alt="logo" />
              <span> </span>
            </div>
          </div>
        </div>
      </div>
      <Nav></Nav>
    </header>
  );
}

export default Header;
