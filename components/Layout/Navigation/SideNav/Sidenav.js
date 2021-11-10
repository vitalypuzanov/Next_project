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
    <div key={navdata.title} className={classes.nav_title}>
      {navdata.map((navdata) => (
        <nav key={navdata.title}>
          <ul>
            <li>
              <Link href={navdata.href}>{navdata.title}</Link>
            </li>
          </ul>
        </nav>
      ))}
    </div>
  );
}
export default Sidenav;
