import React from 'react';
import Link from 'next/link';
import classes from '../Header/Header.module.css';
import Nav from '../Navigation/Nav/Nav';

const iconData = [
  {href: '/auth', img: 'man-svgrepo-com.svg'},
  {href: '/auth', img: 'bag-svgrepo-com.svg'},
  {href: '/auth', img: 'star-svgrepo-com.svg'},
];

function Header() {
  return (
    <header>
      <div className={classes.header}>
        <nav className={classes.header__nav}>
          <ul>
            <li>
              <Link href="/card">Мужское</Link>
            </li>
            <li>
              <Link href="/women">Женское</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header__logo}>
          <Link href="/">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/17652c15837939.562979668f0e4.jpg"></img>
          </Link>
        </div>
        <div className={classes.header__icon}>
          <div className={classes.header__icon_items}>
            <div className={classes.header__icon_item}>
              {iconData.map((iconData) => (
                <Link href={iconData.href}>
                  <img src={iconData.img} alt="logo" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Nav></Nav>
    </header>
  );
}

export default Header;
