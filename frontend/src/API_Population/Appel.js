import React, { Component } from 'react';
import axios from 'axios';
import DataAPI from './dataAPI_1';


export default class Appel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { info: {} };
    }


    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60',
            params: { limit: '10', page: '0' },
            headers: {
                'x-rapidapi-key': '31fa019259msh78cc86ea24c3c89p1b41a4jsn41d6981f552a',
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then((response) => {
                this.setState({ info: response.data })
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
            
                <div >

                    

                    <tbody>
                        {
                            this.dataAPI()
                        }
                    </tbody>
                </div>
                
        )
    }

}