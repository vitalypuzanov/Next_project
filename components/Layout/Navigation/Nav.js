import React from 'react';
import Link from 'next/link';
import classes from './Nav.module.css';
import Search from './Search';

function Nav() {
  const navdata = [
    {href: '/sale', title: 'Распродажа'},
    {href: '/new', title: 'Новинки'},
    {href: '/wear', title: 'Одежда'},
    {href: '/contact', title: 'Контакнты'},
  ];
  return (
    <header className={classes.header}>
      <div className={classes.nav_title}>
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
