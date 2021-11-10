import React from 'react';
import Link from 'next/link';

import classes from './Footer.module.css';
import {footerData, iconsData} from './Footerdata';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_icons}>
        <div className={classes.footer_icons_logo}>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/17652c15837939.562979668f0e4.jpg"></img>
        </div>

        <div className={classes.footer_icons_item}>
          <Link href="instagram.com">
            <img src="./instagram-svgrepo-com.svg" alt="" />
          </Link>
          <Link href="facebook">
            <img src="./facebook-svgrepo-com.svg" alt="" />
          </Link>
          <Link href="vk">
            <img src="./vk-svgrepo-com.svg" alt="" />
          </Link>
        </div>
      </div>

      <div className={classes.footer_contact}>
        <div className={classes.footer_contact_title}>
          <div>
            <h3>СЛУЖБА ЗАБОТ</h3>
          </div>
        </div>
        <div className={classes.footer_contact_numbers}>
          <a
            href="tel:+1234567890"
            className={classes.footer_contact_numbers_item}>
            + 375-33-351-58-42
          </a>
          <a
            href="tel:+1234567890"
            className={classes.footer_contact_numbers_item}>
            + 375-33-351-58-42
          </a>
        </div>
        <div className={classes.footer_contact_icons}>
          {iconsData.map((iconsData) => (
            <a key={iconsData.id} href={iconsData.href}>
              <img
                src={iconsData.img}
                className={classes.footer_contact_icon}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
      {footerData.map((footerData) => (
        <nav key={footerData.id} className={classes.footer_nav}>
          <div>
            <h3>{footerData.title}</h3>
          </div>
          <ul>
            <Link href="/delivery">
              <li>{footerData.nav1}</li>
            </Link>
            <Link href="/mens">
              <li>{footerData.nav2}</li>
            </Link>
            <Link href="/mens">
              <li>{footerData.nav3}</li>
            </Link>
            <Link href="/mens">
              <li>{footerData.nav4}</li>
            </Link>
          </ul>
        </nav>
      ))}
    </footer>
  );
}

export default Footer;
