const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3001;
const DarkSkyKey = '0e30c595b970a22fbc4986f76baa89f8';

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
      console.log(data)
      res.json(data.currently.summary)
    })
    .catch((err) => console.log(err));
})

app.listen(port, () => console.log(`WeatherApp is running at port ${port}`));