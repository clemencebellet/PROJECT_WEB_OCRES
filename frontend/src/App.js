import React from 'react';
import './App.css';
import Content from "./API_1/Appel.js";
import Content2 from "./API_2/Appel_2.js";
import Weather from "./Meteo/APIweather";
import Forecast from "./Meteo/APIforecast";
import Menu from "./Menu/Menu";
import Covid from "./GraphiqueCovid/Graph"
import TachesList from './Back/components/taches-list.component';
import Prosideb from './main/components/Sidebar'


/*
// Pour modifier les buttons sur la dashboard => Menu.js/Menu.css
Pour modifier les formulaires (creer event/taches) => les fichiers dans components du fichier back
*/
function App() {

  return (
    <div className="App">
      <div className='menu'>
        <Menu />
        {/* <TachesList /> */}
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

