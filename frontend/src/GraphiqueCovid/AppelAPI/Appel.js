import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

  try {
    const {
      data: { confirmed, deaths, lastUpdate },
    } = await axios.get(`${url}/countries/us`);

    return {
      confirmed,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url} / daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) { }
};

