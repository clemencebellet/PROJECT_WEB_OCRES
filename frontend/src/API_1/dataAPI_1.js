import React, { Component } from 'react';
import '../main/components/body.css'
import logopopu from './surpopulation.png'


export default class dataAPI extends React.Component {
    render() {
        return (


            <div className="InfosVille">
                <div >

                    <img className="imgpopu" src={logopopu} alt="fireSpot" height="25px" width="30px" /> Population

                </div>
                <span >
                    {this.props.obj.population}
                </span>



                <div >

                    Lattitude
                    {"       "} | {"       "}
                    Longitude
                </div>

                <span >
                    {this.props.obj.latitude}{"°"}
                    {"      "} | {"      "}
                    {this.props.obj.longitude}{"°"}</span>









            </div>












        );
    }
}
