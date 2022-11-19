import React, { Component } from 'react';
import '../main/components/body.css'


export default class dataAPI extends React.Component {
    render() {
        return (
            <body>
                <img src="API_1/population.jpg" alt="cc" />
                <tr>
                    <div className="InfosVille">

                        <td>

                            <th>Population</th>


                            {this.props.obj.population}
                        </td>

                    </div>



                </tr>
            </body >
        );
    }
}
