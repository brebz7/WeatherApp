const express = require('express');
const locationAddress = express.Router();
const fetch = require('node-fetch');

const LocationIqKey = process.env.API_KEY_LOCATIONIQ;

locationAddress.post('/', (req, res) => {
  let coords = req.body;
  let {lat, lon} = coords;

  fetch(`https://eu1.locationiq.com/v1/reverse.php?key=${LocationIqKey}&lat=${lat}&lon=${lon}&format=json`)
    .then(response => response.json())
    .then(data => {
      const { address: { country, state, county, town, suburb, neighbourhood } } = data;
      let locationAddress = [country, state, county, town, suburb, neighbourhood];
      res.json(locationAddress);
    })
    .catch((err) => console.log(err));
})

module.exports = locationAddress;