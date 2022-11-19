import React, { Component } from 'react';
import '../main/components/body.css'

export default class dataAPI extends React.Component {
    render() {
        const { propertyValues } = this.props;

        return (
            <body>
                {'      '}

                <div className="departs">
                    <h1>DEPARTURES</h1>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th id="flight">FLIGHT</th>
                                <th id="time">TIME</th>
                                <th id="destination">DESTINATION</th>
                                <th id="company">COMPANY</th>
                                <th id="gate">GATE</th>
                                <th id="remarks">REMARKS</th>
                            </tr>
                        </thead>
                        <tbody id="table-body">

                            {propertyValues.map((obj) => (<div>

                                {obj.flightNumber}
                                {'      '}
                                {obj.estimadedhour}
                                {'      '}
                                {obj.destiny}
                                {'      '}
                                {obj.companyName}
                                {'      '}
                                {obj.terminal}
                                {'      '}
                                {obj.state}

                            </div>))}

                        </tbody>


                    </table>
                </div>

            </body >
        );
    }
}
