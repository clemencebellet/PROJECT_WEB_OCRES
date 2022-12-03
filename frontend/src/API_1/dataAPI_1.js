import React, { Component } from 'react';
import '../main/components/body.css'
import logopopu from './surpopulation.png'


export default class dataAPI extends React.Component {
    render() {
        return (


            <div className="InfosVille">
                <div className='item1'>
                <div >

                    {/* <img className="imgpopu" src={logopopu} alt="fireSpot" height="25px" width="30px" />  */}
                    Population : 

                </div>
                <span >
                {" "} 
                    {this.props.obj.population}
                </span>
                </div>
                <div className='item2'>
                <div >
                    Lattitude : 
                </div>

                <span >
                {" "} 
                    {this.props.obj.latitude}{"°"}
                    </span>
                    </div>
                    <div className='item3'>
                    <div >
                    Longitude : 
                </div>

                <span >
                    {" "} 
                    {this.props.obj.longitude}{"°"}</span>
                    </div>
                









            </div>












        );
    }
}
