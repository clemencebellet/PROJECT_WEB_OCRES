import React from "react";
import { Cards, Bar, InfosCovid } from "./Composants/indexGraph";
import "./Graph.css";
import { fetchData } from "./AppelAPI/Appel";



class Graph extends React.Component {
  state = {
    data: {},
    country: "United States", //On définit le pays des le debut
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData }); // on recupere une fois les data à chaque lancement
  }

  render() {
    const { data, country } = this.state; //On recup nos données du state
    return (
      <div className="container" >



        <Bar data={data} country={country} />
        {/* Création graphique bar  */}
        <InfosCovid data={data} country={country} />
        {/* Création infos nombre  */}



      </div>
    );
  }
}

export default Graph;
