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
    infoWeatherReceived: false,
    infoWeather: '',
    locationAddressReceived: false,
    locationAddress: ''
  }

  // COORDS
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
  
  displayCoords = () => {  //unused
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
        this.setState({ infoWeatherReceived: true, infoWeather })
      });
  }

  bringLocationAddress = () => {
    let coords = this.state.coords;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coords)
    }
    fetch(`/api/locationAddress`, options)
      .then(response => response.json())
      .then(locationAddress => {
        console.log(locationAddress);
        this.setState({ locationAddressReceived: true, locationAddress })
      })
  }

  render() {
    if (!this.state.infoWeatherReceived || !this.state.locationAddressReceived) {
      return (
        <div>
          <p className={styles.coordsText}>
            {this.getCoords()}
          </p>
          <Button variant="contained" color="primary" onClick={() => {this.bringWeatherData(); this.bringLocationAddress()}}>Get Weather Info</Button>
        </div>
      )
    }
    else {
      return (
        <Box>
          <p className={styles.coordsText}>
            Location: {this.state.locationAddress.town}
          </p>
          <WeatherInformation data={this.state.infoWeather} />
          <Box mb={2} onClick={this.sliderMouseDown} >
            <HourlyWeatherInformation
              className={horizontalScrollBarStyle}
              data={this.state.infoWeather}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {this.bringWeatherData(); this.bringLocationAddress()}}
            mb={2}>
            Get Weather Info
          </Button>

        </Box>
      )

    }
  }
}

export default Coords;

