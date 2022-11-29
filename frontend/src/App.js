import React from 'react';
import './App.css';
import Content from "./API_1/Appel.js";
import Content2 from "./API_2/Appel_2.js";
import Weather from "./Meteo/APIweather";
import Forecast from "./Meteo/APIforecast";
import Menu from "./Menu/Menu";


 

function App() {

  return (
    <div className="App">
      <div className='flex1'>
       <Menu />
       </div>
       <div className='flex2'>
      <div className='a1'><Content /></div>
      <div className='a2'><Content2 /></div>
      <div className='a3'><Weather /></div>
      <div className='a4'><Forecast /></div>
     
      </div>
    </div>
  );
}
export default App;