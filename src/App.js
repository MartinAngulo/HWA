import React, { useState } from 'react';
import './App.css';
import loading from  './img/loading.gif';
import axios from 'axios';
import Nav from './components/Nav';
import Cards from './components/Cards';

let apiKey = '20f11bf65812bdcf0eec02db8f3cd378';

export default function App() {

  const [cities, setCities] = useState([]);
  const [isSearch, setSearch] = useState(false);

  function onSearch(city) {
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.main !== null) {
    //       const city = {
    //         min: Math.round(data.main.temp_min),
    //         max: Math.round(data.main.temp_max),
    //         img: data.weather[0].icon,
    //         id: data.id,
    //         name: data.name,
    //         latitud: data.coord.lat,
    //         longitud: data.coord.lon,
    //       };
    //       setCities(state => [...state, city]);
    //     }
    //     else {
    //       alert('Dont found the city')
    //     }
    //   })
    if(cities.find(e=>e.name.toUpperCase()===city.toUpperCase()))return alert('The City is already added');
    
    setSearch(true);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((info) => {
        if (info.data.main) {
          const city = {
            min: Math.round(info.data.main.temp_min),
            max: Math.round(info.data.main.temp_max),
            img: info.data.weather[0].icon,
            id: info.data.id,
            name: info.data.name,
            latitud: info.data.coord.lat,
            longitud: info.data.coord.lon,
            desc: info.data.weather[0].description,
          };
          setCities(state => [...state, city]);
          setSearch(false);
        }
        else {
          setSearch(false);
          alert('City not found');
        }
      })
      .catch(() => {
        setSearch(false);
        alert('City not found');
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {
        isSearch
          ?
          <img alt='loading' loading='lazy'
          src={loading}
          ></img>
          :
          <Cards cities={cities} onClose={onClose} />
      }

    </div>
  );
}
