import React, { Component } from 'react';
import '../main/components/body.css'

export default class dataAPI extends React.Component {
    render() {
        const { propertyValues } = this.props;

        return (
            <body>

                <table class="container">
                    <thead>
                        <tr>
                            <th><h1>Flight</h1></th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {propertyValues.map((obj) => (<div>

                                <td><th>{obj.flight_number}</th></td>

                            </div>))}
                        </tr>

                    </tbody>
                </table>

                <table class="container">
                    <thead>
                        <tr>
                            <th><h1>Destination</h1></th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {propertyValues.map((obj) => (<div>

                                <td><th>{obj.arr_iata}</th></td>

                            </div>))}
                        </tr>

                    </tbody>
                </table>

                <table class="container">
                    <thead>
                        <tr>
                            <th><h1>Gate</h1></th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {propertyValues.map((obj) => (<div>

                                <td><th>{obj.dep_gate}</th></td>

                            </div>))}
                        </tr>

                    </tbody>
                </table>
                <table class="container">
                    <thead>
                        <tr>
                            <th><h1>Estimé</h1></th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {propertyValues.map((obj) => (<div>

                                <td><th>{obj.dep_time}</th></td>

                            </div>))}
                        </tr>

                    </tbody>
                </table>

            </body >
        );
    }
}
