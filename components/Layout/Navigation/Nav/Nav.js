import React from 'react';
import Link from 'next/link';
import Search from '../Search/Search';
import classes from '../Nav/Nav.module.css';
import {navdata} from './Navdata';

function Nav() {
  return (
    <header className={classes.header}>
      <div className={classes.nav_title}>
        <ul>
          {navdata.map((navdata) => (
            <nav key={navdata.title}>
              <li>
                <Link href={navdata.href}>{navdata.title}</Link>
              </li>
            </nav>
          ))}
        </ul>
      </div>
      <Search></Search>
    </header>
  );
}

export default Nav;
