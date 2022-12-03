import React from 'react';
import './App.css';
import Content from "./API_1/Appel.js";
import Content2 from "./API_2/Appel_2.js";
import Weather from "./Meteo/APIweather";
import Forecast from "./Meteo/APIforecast";
import Menu from "./Menu/Menu";
import Covid from "./GraphiqueCovid/Graph"

function App() {

  return (
    <div className="App">
      <div className='menu'>
       <Menu />
       </div>
       <div className='flex2'>
      <div className='a1'><Weather /><Forecast /></div>
      <div className='a3'><Content /></div>
      <div className='a4'><Covid /></div>
      <div className='a5'><Content2 /></div>
      <div className='a6'>6</div>

     
      </div>
    </div>
  );
}
export default App;

