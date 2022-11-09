import React, { Component } from 'react';
import axios from 'axios';
import DataAPI from './dataAPI_2';


export default class Appel2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { info: [] };
    }


    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures',
            headers: {
                'X-RapidAPI-Key': '31fa019259msh78cc86ea24c3c89p1b41a4jsn41d6981f552a',
                'X-RapidAPI-Host': 'madrid-barajas-airport-flights.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then((response) => {
                this.setState({ info: response.data.slice(0, 6) })
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        const propertyValues = Object.values(this.state.info);
    }


    dataAPI() {
        const propertyValues = Object.values(this.state.info);
        return propertyValues.map((data, i) => {
            return <DataAPI obj={data} key={i} />;
        });
    }


    render() {
        return (
            <div className="index">


                <div className="container">


                    {
                        this.dataAPI()
                    }

                </div>

            </div>
        )
    }

}