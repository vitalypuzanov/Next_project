import React from 'react';
import Link from 'next/link';
import {useSession, signOut} from 'next-auth/client';

import Nav from '../Navigation/Nav/Nav';

import classes from '../Header/Header.module.css';

const iconData = [
  {href: '/profile', img: 'man-svgrepo-com.svg', id: '1'},
  {href: '/auth', img: 'bag-svgrepo-com.svg', id: '2'},
  {href: '/auth', img: 'star-svgrepo-com.svg', id: '3'},
];

function Header() {
  const [session, loading] = useSession();

  function logoutHandler() {
    signOut();
  }

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
            {!session && !loading && <Link href="/auth">Войти</Link>}
            <p onClick={logoutHandler}>Выйти</p>
            <div className={classes.header__icon_item}>
              {iconData.map((iconData) => (
                <Link key={iconData.id} href={iconData.href}>
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
