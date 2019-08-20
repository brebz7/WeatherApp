const express = require('express');
const locationAddress = express.Router();
const fetch = require('node-fetch');

const LocationIqKey = process.env.API_KEY_LOCATIONIQ;

locationAddress.post('/', (req,res) => {
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

module.exports = locationAddress;