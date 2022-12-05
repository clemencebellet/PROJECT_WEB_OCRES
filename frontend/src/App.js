import React from 'react';
import './App.css';
import Content from "./API_Population/Appel.js";
import Content2 from "./API_Avions/Appel_2.js";
import Weather from "./API_Meteo/APIweather";
import Forecast from "./API_Meteo/APIforecast";
import Menu from "./Menu/Menu";
import Covid from "./GraphiqueCovid/Graph"
import TachesList from "./Back/components/taches-list.component"



/*
// Pour modifier les buttons sur la dashboard => Menu.js/Menu.css
Pour modifier les formulaires (creer event/taches) => les fichiers dans components du fichier back
*/
function App() {

  return (
    <div className="App">
      <div className='menu'>
        <Menu />

      </div>
      <div className='flex2'>
        <div className='a1'><Weather /><Forecast /></div>
        <div className='a4'><Covid /></div>
        <div className='a3'><Content /></div>
        <div className='a5'><Content2 /></div>
        <div className='a6'><TachesList /></div>
        
  
        
      </div>



    </div>
  );
}
export default App;

