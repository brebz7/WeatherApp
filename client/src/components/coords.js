import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import styles from './comps.module.css';
import horizontalScrollBarStyle from './horizontalScrollBar.module.css';

import WeatherInformation from './weatherInformation';
import HourlyWeatherInformation from './hourlyWeatherInformation';
import LocationCard from './locationCard';

class Coords extends Component {
  state = {
    coords: {},
    infoWeatherReceived: false,
    infoWeather: '',
    locationAddressReceived: false,
    locationAddress: ''
  }

  componentDidMount() {
    this.findCoordsAndCallAPIs();
  }

  findCoordsAndCallAPIs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        coords: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      })
      this.bringLocationAddress();
      this.bringWeatherData();
    })
  }

  bringWeatherData = () => {
    let coords = this.state.coords;         //repeating code
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
    let coords = this.state.coords;         //repeating code
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
        <div className={styles.loadingButtonContainer}>
          <Button variant="contained" color="primary" onClick={() => { this.bringWeatherData(); this.bringLocationAddress() }}>Loading Weather ...</Button>
        </div>
      )
    }
    else {
      return (
        <Box>
          <p>
            <LocationCard title="Location" data={`${this.state.locationAddress.town}, ${this.state.locationAddress.county}`} />
          </p>
          <WeatherInformation data={this.state.infoWeather} />
          <Box mb={2} onClick={this.sliderMouseDown} >
            <HourlyWeatherInformation
              className={horizontalScrollBarStyle}
              data={this.state.infoWeather}
            />
          </Box>
          <div className={styles.refreshButtonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => { this.bringWeatherData(); this.bringLocationAddress() }}
              mb={2}>
              Refresh
          </Button>
          </div>
        </Box>
      )
    }
  }
}

export default Coords;