    import React, { Component } from "react";
    import axios from "axios";
    import Day from "./Day";
    import "../API_Meteo/meteo.css";


    export default class APIforecast extends Component {
        constructor(props) {
            super(props);
            this.state = {
                forecast: null
            };
        }



        callAPI() {
            axios
                .get(`https://api.openweathermap.org/data/2.5/forecast?q=New York&units=imperial&appid=82e6a246afbe12d618c1124536cb35e5
                `)
                .then(({ data }) => {
                    console.log(data);
                    const { list } = data;
                    const forecast = [list[9], list[17], list[25], list[33]];

                    this.setState({ forecast });
                })
                .catch(console.error);
        };


        componentDidMount() {
            this.callAPI();
        }



        render() {
            const { forecast } = this.state;
            if (!forecast) return <p>Loading...</p>;
            return (
                <div className="app2">

                    <div className="bottom">


                        <div className="forecast-container">
                            {forecast.map((forecastData, index) => {
                                return <Day key={index} data={forecastData} />;
                            })}

                        </div>
                    </div>

                </div >
            );
        }
    }

