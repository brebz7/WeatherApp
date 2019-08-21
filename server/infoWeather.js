const express = require('express');
const infoWeather = express.Router();
const fetch = require('node-fetch');
const moment = require('moment');

const DarkSkyKey = process.env.API_KEY_DARKSKY;

infoWeather.post('/', (req, res) => {
  let coords = req.body;
  let { lat, lon } = coords;

  fetch(`https://api.darksky.net/forecast/${DarkSkyKey}/${lat},${lon}`)
    .then(response => response.json())
    .then(data => {
      let weatherData = {
        currently: {
          time: moment.unix(data.currently.time).format("dddd, MMMM Do YYYY, h:mm:ss a"),
          summary: data.currently.summary,
          temperature: data.currently.temperature,
          precipProbability: data.currently.precipProbability,
          precipType: data.currently.precipType,
          humidity: (data.currently.humidity * 100).toFixed(0),
          pressure: data.currently.pressure,
          windSpeed: data.currently.windSpeed,
          visibility: data.currently.visibility
        },
        hourly: {
          data: data.hourly.data
            .map(data => {
              data.time = moment.unix(data.time).format("h:mm");
              data.temperature = ((data.temperature - 32) * 5 / 9).toFixed(2);
              return data;
            })
        }
      }
      res.json(weatherData);
    })
    .catch((err) => console.log(err));
})

module.exports = infoWeather;