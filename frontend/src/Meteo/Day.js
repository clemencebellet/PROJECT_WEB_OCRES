import React, { Component } from "react";
import "./meteo.css";

class Day extends Component {
    render() {
        const { data } = this.props;
        console.log("data", data);
        if (!data) return null;

        const { dt_txt } = data;
        const { temp } = data.main;
        const { icon, description } = data.weather[0];
        return (

            <div className="day-container">
                <p id="fontforecast">{dt_txt}</p>
                <img id="fontforecast"
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt="weather"
                />
                <p id="fontforecast">{description}</p>
                <strong>{temp} celsius</strong>
            </div>

        );
    }
}

export default Day;
