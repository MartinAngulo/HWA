import React, { useState } from 'react';
import styles from '../StyleSheets/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState('');
  return (
    <form className={styles.container} onSubmit={(e) => {
      if(city==='')return alert("You need type a city's name")
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        className={styles.input}
        type='search'
        placeholder="Please type the city's name here..."
        onChange={event => setCity(event.target.value)}
        value={city}
      />
      <input className={styles.button} type='submit' value='Add city' />
    </form>
  )
};