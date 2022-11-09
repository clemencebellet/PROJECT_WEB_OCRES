import React, { Component } from 'react';
import '../main/components/body.css'

export default class dataAPI extends React.Component {
    render() {
        return (
            <body>
                ✈︎
                {'      '}
                {this.props.obj.flightNumber}
                {'      '}
                {this.props.obj.programmedHour}
                {'      '}
                {this.props.obj.destiny}
                {'      '}
                {this.props.obj.companyName}
                {'      '}
                {this.props.obj.state}
                {'      '}
                {this.props.obj.terminal}



            </body >
        );
    }
}
