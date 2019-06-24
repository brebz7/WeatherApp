import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import styles from './comps.module.css';
import horizontalScrollBarStyle from './horizontalScrollBar.module.css';

import WeatherInformation from './weatherInformation';
import HourlyWeatherInformation from './hourlyWeatherInformation';

class Coords extends Component {
  state = {
    coords: {},
    infoReceived: false,
    infoWeather: ''
  }

  getCoords = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        coords: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      })
    })
  }

  displayCoords = () => {


    if ("geolocation" in navigator) {
      this.getCoords();
      return ` ${this.state.coords.lat}, ${this.state.coords.lon}`;
    }
    else {
      return ` Geolocation is disabled`;
    }
  }

  bringWeatherData = () => {
    let coords = this.state.coords;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coords)
    }

    fetch(`/api/coords`, options)
      .then(response => response.json())
      .then(infoWeather => {
        console.log(infoWeather);
        this.setState({ infoReceived: true, infoWeather })
      }
      );
  }

  render() {
    if (!this.state.infoReceived) {
      return (
        <div>
          <p className={styles.coordsText}>
            Coords: {this.displayCoords()}
          </p>
          <Button variant="contained" color="primary" onClick={this.bringWeatherData}>Get Weather Info</Button>
        </div>
      )
    }
    else {
      return (
        <Box>
          <p className={styles.coordsText}>
            Coords: {this.displayCoords()}
          </p>
          <WeatherInformation data={this.state.infoWeather} />
          <Box mb={2}>
            <HourlyWeatherInformation className={horizontalScrollBarStyle} data={this.state.infoWeather} />
          </Box>
          <Button variant="contained" color="primary" onClick={this.bringWeatherData} mb={2}>Get Weather Info</Button>

        </Box>
      )

    }
  }
}

export default Coords;

