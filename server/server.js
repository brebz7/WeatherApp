const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
require('dotenv').config();

const locationAddress = require('./locationAddress');
const infoWeather = require('./infoWeather');

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.use('/api/locationAddress', locationAddress);
app.use('/api/coords', infoWeather);

app.listen(port, () => console.log(`WeatherApp is running at port ${port}`));