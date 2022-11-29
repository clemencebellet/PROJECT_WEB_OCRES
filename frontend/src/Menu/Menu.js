import { Component } from 'react';
import './menu.css';
export default class Menu extends Component{
    render(){
    return(
        <div className='menu'>
            <h3>CityBoard</h3>
            <nav>
                <a href="/#">Dashboard</a>
                <a href="/#">Change API</a>
                
            </nav>
            
        </div>
    );
    }
}