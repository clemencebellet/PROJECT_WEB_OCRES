import React, { Component } from "react";
import axios from "axios";

const API_URL = "https://airlabs.co/api/v9/cities?city_code=SIN&api_key=915e88a8-7463-4afd-b52d-7aa745cd55ed";
const API_KEY = "915e88a8-7463-4afd-b52d-7aa745cd55ed";




export default class Population extends Component {
    state = {
        post: {}
    }
    componentDidMount() {
        fetch('https://airlabs.co/api/v9/cities?city_code=SIN&api_key=915e88a8-7463-4afd-b52d-7aa745cd55ed')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ post: result })
                console.log(result)
            })
    }


    render() {


        return (
            <div>
                <h1>Dernier article</h1>
                {this.state.post.name}
            </div>

        );
    }
}

