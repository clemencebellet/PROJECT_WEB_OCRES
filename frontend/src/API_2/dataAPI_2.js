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

                                <td><th>{obj.flightNumber}</th></td>

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

                                <td><th>{obj.destiny}</th></td>

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

                                <td><th>{obj.firstDoor}</th></td>

                            </div>))}
                        </tr>

                    </tbody>
                </table>
                <table class="container">
                    <thead>
                        <tr>
                            <th><h1>Remarks</h1></th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {propertyValues.map((obj) => (<div>

                                <td><th>{obj.state}</th></td>

                            </div>))}
                        </tr>

                    </tbody>
                </table>

            </body >
        );
    }
}
