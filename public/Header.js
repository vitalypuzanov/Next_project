import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <a className="header-nav_item" href>
          Мужское{' '}
        </a>
        <a className="header-nav_item" href>
          Женское{' '}
        </a>
      </div>
      <div className="header-logo">
        {/* <img src="https://cdn.aizel.ru/i/1241100.jpg" alt="logo" /> */}
        <h1>Logotype</h1>
      </div>
      <div className="header-icon">
        <div className="header-icon_items">
          <div className="header-icon_item">
            <img src="man-svgrepo-com.svg" className="logo" alt="logo" />
            <span> Войти </span>
          </div>
          <div className="header-icon_item">
            <img src="./star-svgrepo-com.svg" className="logo" alt="logo" />
            <span>0</span>
          </div>
          <div className="header-icon_item">
            <img src="./bag-svgrepo-com.svg" className="logo" alt="logo" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
