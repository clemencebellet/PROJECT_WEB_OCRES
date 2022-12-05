import React from 'react';
import './menu.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import CreateTache from '../Back/components/create-tache.component';
import CreateEvent from '../Back/components/create-event.component';
import logo from '../API_Population/logo.png'


export default function Menu() {
    const navigate = useNavigate();

    const navigateToCreate = () => {

        navigate('/create');
    };

    const navigateToEvent = () => {

        navigate('/event');
    };
    const navigateToDash = () => {

        navigate('/');
    };
    return (
        <div>
       <div className='align'>
            <img className="imgpopu2" src={logo} alt="fireSpot" height="75px" width="75px" />
            <h3>CityBoard</h3>
            </div>  
            <nav>

                    <div className='PlaceBouton'></div>
                        <button className="button" onClick={navigateToDash}><span>Dashboard </span></button>
                        <br />
                        <button className="button" onClick={navigateToEvent}><span>Creer un Event </span></button>
                        <br />
                        <button className="button" onClick={navigateToCreate}><span>Ajouter Event </span></button>

                        <Routes>
                            {/* <Route path="/tache" element={<TachesList />} /> */}
                            <Route path="/create" element={<CreateTache />} />
                            <Route path="/event" element={<CreateEvent />} />
                        </Routes>
                    





            </nav>

        </div>
    );
}
/*
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Navbar from "./components/navbar.component"
import TachesList from "./components/taches-list.component";

import CreateTache from "./components/create-tache.component";
import CreateEvent from "./components/create-event.component";
import { func } from 'prop-types';

function MyApi() {

    const navigate = useNavigate();

    const navigateToCreate = () => {
        // 👇️ navigate to /contacts
        navigate('/create');
    };

    const navigateToEvent = () => {
        // 👇️ navigate to /
        navigate('/event');
    };
    const navigateToDash = () => {
        // 👇️ navigate to /
        navigate('/');
    };
    return (
        <div>
            <div>
                {/* <button onClick={navigateTache}>Taches</button> 
                <button onClick={navigateToCreate}>Create</button>
                <br />
                <button onClick={navigateToEvent}>Events</button>
                <br />
                <button onClick={navigateToDash}>Dash</button>

                <Routes>
                    {/* <Route path="/tache" element={<TachesList />} /> 
                    <Route path="/create" element={<CreateTache />} />
                    <Route path="/event" element={<CreateEvent />} />
                </Routes>
            </div>
        </div>
    );
}

// export default MyApi;*/