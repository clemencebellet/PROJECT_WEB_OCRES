import React, { Component } from "react";
import axios from "axios";
import "../Meteo/meteo.css";



export default class APImeteo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []

        };
    }

    callAPI() {

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=paris&units=imperial&appid=82e6a246afbe12d618c1124536cb35e5
            `)
            .then(({ data }) => {
                this.setState({ info: data })
                console.log(data);


            })
            .catch(console.error);
    };

    componentDidMount() {
        this.callAPI();
    }

    render() {

        return (
            <div>
                <div className="app">
                    <div className="bloc">
                        <div className="top">
                            <div className="location">
                                <p>{this.state.info.name}</p>
                            </div>
                            <div className="temp">
                                {this.state.info.main ? <h1>{this.state.info.main.temp.toFixed()}°F</h1> : null}
                            </div>
                            <div className="description">
                                {this.state.info.weather ? <p>{this.state.info.weather[0].main}</p> : null}
                                {this.state.info.weather ? <p>{<img
                                    src={`http://openweathermap.org/img/w/${this.state.info.weather[0].icon}.png`}
                                    alt="weather"
                                />}</p> : null}
                            </div>


                        </div>

                    </div>
                </div></div>
        );
    }
}

