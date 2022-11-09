import React, { Component } from 'react';

export default class dataAPI extends React.Component {
    render() {
        return (
            <body>
                <tr>
                    <div className="InfosVille">
                        <td>
                            Population
                            <br />

                            {this.props.obj.population}
                        </td>
                    </div>
                    <div className="InfosVille">
                        <td>
                            Country
                            <br />

                            {this.props.obj.country}
                        </td>
                    </div>

                    <div className="InfosVille">
                        <td>
                            Latitude -- Longitude
                            <br />

                            {this.props.obj.latitude}°  -- {this.props.obj.longitude}°
                        </td>
                    </div>
                    <td>

                    </td>

                </tr>
            </body >
        );
    }
}
