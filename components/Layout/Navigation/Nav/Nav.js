import React from 'react';
import Link from 'next/link';
import classes from '../Nav/Nav.module.css';
import Search from '../Search/Search';

function Nav() {
  const navdata = [
    {href: '/categories', title: 'Категории'},
    {href: '/wear', title: 'Одежда'},
    {href: '/delivery', title: 'Доставка'},
    {href: '/contacts', title: 'Контакнты'},
  ];
  return (
    <header className={classes.header}>
      <div key={navdata.title} className={classes.nav_title}>
        {navdata.map((navdata) => (
          <nav>
            <ul>
              <li>
                <Link href={navdata.href}>{navdata.title}</Link>
              </li>
            </ul>
          </nav>
        ))}
      </div>
      <Search></Search>
    </header>
  );
}

export default Nav;
