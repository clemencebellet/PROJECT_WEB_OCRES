import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './all.css'

export default class CreateTache extends Component {
  constructor(props) {
    super(props);

    this.onChangeEventname = this.onChangeEventname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      eventname: '',
      description: '',
      duration: 0,
      date: new Date(),
      events: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/events/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            events: response.data.map(event => event.eventname),
            eventname: response.data[0].eventname
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeEventname(e) {
    this.setState({
      eventname: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const tache = {
      eventname: this.state.eventname,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(tache);

    axios.post('http://localhost:3001/taches/add', tache)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nom de l'Event: </label>
            <select ref="eventInput"
              required
              className="form-control"
              value={this.state.eventname}
              onChange={this.onChangeEventname}>
              {
                this.state.events.map(function (event) {
                  return <option
                    key={event}
                    value={event}>{event}
                  </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"

              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Durée (en minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Créer Nouvelle Tâche" className="btn" />
          </div>
        </form>
      </div>
    )
  }
}