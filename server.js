const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3001;
var moment = require('moment');
require('dotenv').config();

const DarkSkyKey = process.env.API_KEY_DARKSKY;
const LocationIqKey = process.env.API_KEY_LOCATIONIQ;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
})

app.post('/api/coords', (req, res) => {
  let coords = req.body;
  let lat = coords.lat;
  let lon = coords.lon;

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

app.post('/api/locationAddress', (req,res) => {
  let coords = req.body;
  let lat = coords.lat;
  let lon = coords.lon;
  fetch(`https://eu1.locationiq.com/v1/reverse.php?key=${LocationIqKey}&lat=${lat}&lon=${lon}&format=json`)
    .then(response => response.json())
    .then(data => {
      let locationAddress = {
        suburb: data.address.suburb,
        town: data.address.town,
        county: data.address.county,
        country: data.address.country
      }
      res.json(locationAddress);
    })
    .catch((err) => console.log(err));
})

app.listen(port, () => console.log(`WeatherApp is running at port ${port}`));