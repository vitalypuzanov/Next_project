import React from 'react';
import classes from '../Search/Search .module.css';

function Search() {
  return (
    <div className={classes.nav_search}>
      <input type="text" placeholder="Поиск.."></input>
    </div>
  );
}

export default Search;
