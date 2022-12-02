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

      <div className='menu'>
       <Menu />
       </div>
       
     <div className='flex2'> 
      <div className='a1'>
        1
        
         {/* <Weather />  */}
        2
        
        {/* <Forecast /> */}
        </div>
     
        
        
      <div className='a3'>
        3
        {/* <Content /> */}
        
        </div>
        <div className='a4'>
          4
          
          </div>
          <div className='a5'>
          5
          {/* <Content2 /> */}
          </div>
      </div>
      <div className='a6'>
          6
          </div>
    </div>
  );
}
export default App;