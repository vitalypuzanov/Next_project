import React from 'react';
import Link from 'next/link';
import classes from '../SideNav/./Sidenav.module.css';

const navdata = [
  {href: '/sale', title: 'ДОСТАВКА И САМОВЫВОЗ'},
  {href: '/wear', title: 'ОПЛАТА'},
  {href: '/delivery', title: 'ВОЗВРАТ'},
  {href: '/contacts', title: 'ЧАСТЫЕ ВОПРОСЫ'},
  {href: '/contacts', title: 'КОНТАКТЫ'},
];

function Sidenav() {
  return (
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
  );
}
export default Sidenav;
