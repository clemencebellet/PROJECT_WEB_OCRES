import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeEventname = this.onChangeEventname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      eventname: ''
    }
  }

  onChangeEventname(e) {
    this.setState({
      eventname: e.target.value
    })
  }

  onSubmit(e) {


    const event = {
      eventname: this.state.eventname
    }

    console.log(event);

    axios.post('http://localhost:3001/events/add', event)
      .then(res => console.log(res.data));

    this.setState({
      eventname: ''
    })


  }

  render() {
    return (
      <div>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nom de l'Event: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.eventname}
              onChange={this.onChangeEventname}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Event" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}