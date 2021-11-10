import React from 'react';
import Link from 'next/link';
import classes from '../Nav/Nav.module.css';
import Search from '../Search/Search';

function Nav() {
  const navdata = [
    {href: '/categories', title: 'Категории', id: '1'},
    {href: '/wear', title: 'Одежда', id: '2'},
    {href: '/delivery', title: 'Доставка', id: '3'},
    {href: '/contacts', title: 'Контакнты', id: '4'},
  ];
  return (
    <header className={classes.header}>
      <div key={navdata.title} className={classes.nav_title}>
        {navdata.map((navdata) => (
          <nav key={navdata.id}>
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
