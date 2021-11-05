import React from 'react';
import Link from 'next/link';
import classes from '../SideNav/./Sidenav.module.css';

function Sidenav() {
  const navdata = [
    {href: '/sale', title: 'ДОСТАВКА И САМОВЫВОЗ'},
    {href: '/wear', title: 'ОПЛАТА'},
    {href: '/delivery', title: 'ВОЗВРАТ'},
    {href: '/contacts', title: 'ЧАСТЫЕ ВОПРОСЫ'},
    {href: '/contacts', title: 'КОНТАКТЫ'},
  ];
  return (
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
  );
}
export default Sidenav;
