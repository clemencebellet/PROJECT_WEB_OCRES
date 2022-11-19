import React from 'react';
import axios from 'axios';
import './App.css';
import Content from "./API_1/Appel.js"
import Content2 from "./API_2/Appel_2.js"
import Weather from "./Meteo/APIweather"
import Forecast from "./Meteo/APIforecast"



function App() {

  return (
    <div className="App">
      <Content />
      <Content2 />
      <Weather />
      <Forecast />


    </div>
  );
}
export default App;