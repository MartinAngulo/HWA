import React from 'react';
import Logo from '../img/logo_henry.png'
import SearchBar from './SearchBar.jsx';
import styles from  '../StyleSheets/Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
        className={styles.logoHenry}
        alt="logo Henry"
        src={Logo}/>
        <h1 className={styles.henry}>HENRY WEATHER APP</h1>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
    
  );
};

export default Nav;
