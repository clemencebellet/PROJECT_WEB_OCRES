import React, { Component } from 'react';
import axios from 'axios';
import './all.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateTache from './create-tache.component';
import CreateEvent from './create-event.component';

const Tache = props => (
  <tr>
    <td>{props.tache.eventname}</td>
    <td>{props.tache.description}</td>
    <td>{props.tache.duration}</td>
    <td>{props.tache.date.substring(0, 10)}</td>
    <td>
      <a href="#" onClick={() => { props.deleteTache(props.tache._id) }}>delete</a>


    </td>
  </tr>
)

export default class TachesList extends Component {
  constructor(props) {
    super(props);

    this.deleteTache = this.deleteTache.bind(this)

    this.state = { taches: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/taches/')
      .then(response => {
        this.setState({ taches: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTache(id) {
    axios.delete('http://localhost:3001/taches/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      taches: this.state.taches.filter(el => el._id !== id)
    })
  }


  tacheList() {
    return this.state.taches.map(currenttache => {
      return <Tache tache={currenttache} deleteTache={this.deleteTache} key={currenttache._id} />;
    })
  }

  render() {
    return (
      <div className='ensemble'>
        <h3>Evenements à venir </h3>

        <table className="table">
          <thead className="thead-light">

            <tr>
              <td>Nom de l'Event</td>
              <td>Description</td>
              <td>Durée</td>
              <td>Date</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {console.log(this.tacheList())}
            {this.tacheList()}
          </tbody>
        </table>

      </div >

    )
  }
}