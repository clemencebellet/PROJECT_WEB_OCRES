import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./InfosCovid.css";
import CountUp from "react-countup";
import cx from "classnames";

const InfosCovid = ({
  data: { confirmed, deaths, lastUpdate },
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }
  const active = confirmed["value"] - deaths["value"];
  let informations = [
    {
      style: "cas",
      text: "Cas",
      value: confirmed.value,
      bottomText: "Nombre de cas Covid-19",
    },

    {
      style: "deces",
      text: "Décès",
      value: deaths.value,
      bottomText: "Nombre de décès à cause du Covid-19",
    },

  ];
  return (
    <div className="styleCarte">
      <div className={styles.container}>
        {/* Espace entre les cartes infos */}
        <Grid container spacing={14}>

          {informations.map((detail, index) => (
            // Modification de l'interieur d'une carte
            <Grid
              item
              component={Card}
              xs={20}
              md={6}
              className={cx(styles.Card, detail.style)}
              key={index}
              style={{ marginTop: "-20px" }}
            >
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                  <b>{detail.text}</b>
                </Typography>
                <Typography variant="h5">
                  {/* Compteur réel des informations  */}
                  <CountUp
                    start={0}
                    end={detail.value}
                    duration={2}
                    separator=","
                  />
                </Typography>
                <Typography color="textPrimary">Dernière actualité  du :  </Typography>
                <Typography color="textSecondary" variant="body2">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                {/* Temps/ */}
                <Typography color="textSecondary" variant="body2">
                  {new Date(lastUpdate).toLocaleTimeString()}
                </Typography>
                <Typography variant="body2">{detail.bottomText}</Typography>
                <Typography color="textPrimary"> {country} </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default InfosCovid;
