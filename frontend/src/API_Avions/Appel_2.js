import React, { Component } from 'react';
import axios from 'axios';
import DataAPI from './dataAPI_2';


export default class Appel2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { info: [] };
    }


    componentDidMount() {
        axios
            .get(`https://airlabs.co/api/v9/schedules?dep_iata=JFK&api_key=915e88a8-7463-4afd-b52d-7aa745cd55ed
        `)
            .then(({ data }) => {
                console.log(data.response);
                this.setState({ info: data.response.splice(0, 6) })

                const propertyValues = Object.values(this.state.info);

            })
            .catch(console.error);
    }


    dataAPI() {
        const propertyValues = Object.values(this.state.info);

        return <DataAPI propertyValues={propertyValues} />;

    }


    render() {
        return (
           
                <div >
                    {
                        this.dataAPI()
                    }
                </div>

           
        )
    }

}

/*
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

*/