import React, { Component } from 'react';
import '../main/components/body.css'

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
                            <br />
                            <br />
                            Country
                            <br />

                            {this.props.obj.country}
                        </td>
                    </div>

                    <td>


                    </td>

                </tr>
            </body >
        );
    }
}
