import React from 'react';
import Link from 'next/link';
import classes from './Nav.module.css';

function Nav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href="/sale">Sale</Link>
          </li>
          <li>
            <Link href="/new">New in</Link>
          </li>
          <li>
            <Link href="/wear">Wear</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.nav_search}>
        <input type="text" placeholder="Search.."></input>
      </div>
    </header>
  );
}

export default Nav;
