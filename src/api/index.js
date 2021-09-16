import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// fetch the data from URL
export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    // console.log(data);
    const result = data.map(
      ({ confirmed, recovered, deaths, reportDate: date }) => ({
        confirmed: confirmed.total,
        recovered: recovered.total,
        deaths: deaths.total,
        date,
      })
    );
    // console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

export const fetchDailyUsData = async () => {
  try {
    let cors = 'https://cors-anywhere.herokuapp.com/';
    const { data } = await axios.get(
      `${cors}https://api.covidtracking.com/v1/us/daily.json`
    );
    const result = data.map(
      ({ positive, recovered, death, dateChecked: date }) => ({
        confirm: positive,
        recovered,
        deaths: death,
        date,
      })
    );
    return result;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    const result = countries.map((country) => country.name);

    return result;
  } catch (error) {
    return error;
  }
};
