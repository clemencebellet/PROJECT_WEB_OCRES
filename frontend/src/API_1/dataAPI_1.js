import React, { Component } from 'react';
import '../main/components/body.css'
import logo from './logo.png'


export default class dataAPI extends React.Component {
    render() {
        return (


            <div className="InfosVille">

                <div >

                    <img className="imgpopu" src={logo} alt="fireSpot" height="45px" width="45px" />
                    <p className='titre'>A propos de New York</p>
                    <div className='item1'>
                        <div className='info'>Population :</div>
                        {this.props.obj.population}
                    </div>
                    <span >


                    </span>
                </div>
                <div className='item2'>
                    <div className='info'>
                        Lattitude :
                    </div>

                    <span >
                        {" "}
                        {this.props.obj.latitude}{"°"}
                    </span>

                </div>
                <div className='item3'>
                    <div className='info'>
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
