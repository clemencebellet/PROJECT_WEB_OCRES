import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../AppelAPI/Appel";
import { Bar } from "react-chartjs-2";
import "./Bar.css";
import { Chart, LineController, LineElement, BarController, BarElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, BarController, BarElement, Title, CategoryScale);

const Graphe = ({ data: { confirmed, deaths }, country }) => {
  let lineChart;
  <canvas id="myChart" width="400" height="400"></canvas>

  const [dailyData, setDailyData] = useState([]);

  //Utilisation de Hooks ici UseEffect => ça combine componentDidMount componentDidUpdate  and componentWillUnmount

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  //Création  du graphique en barre

  const GraphiqueBAR = confirmed ? (
    <div className="graph" style={{ width: "50vh" }}>
      {/* taille du graphique */}
      <Bar
        data={{
          labels: ["Cas", "Décès", "Actif"], //Texte en dessous du graph

          datasets: [
            {
              //Couleur des blocs de barre
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(255, 0, 0, 0.5)",
                "rgba(0, 255, 0, 0.5)",
              ],
              //Informations reucp de l'api 
              data: [
                confirmed.value,
                deaths.value,
                confirmed.value - deaths.value,
              ],

            },
          ],
        }}

      />
    </div>

  ) : null;


  return (

    <div className="containerGraphe ">
      {GraphiqueBAR}
    </div>


  );
};

export default Graphe;
