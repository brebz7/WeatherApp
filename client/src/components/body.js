import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import styles from './comps.module.css';
import horizontalScrollBarStyle from './horizontalScrollBar.module.css';

import WeatherInformation from './weatherInformation';
import HourlyWeatherInformation from './hourlyWeatherInformation';
import LocationCard from './locationCard';

class Body extends Component {
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
      this.fetchDataAndSetState('/api/coords');
      this.fetchDataAndSetState('/api/locationAddress');
    })
  }

  fetchDataAndSetState = (location) => {
    let { coords } = this.state;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coords)
    }
    fetch(location, options)
      .then(response => response.json())
      .then(data => {
        if (location === '/api/coords')
          this.setState({ infoWeatherReceived: true, infoWeather: data });
        else if (location === '/api/locationAddress')
          this.setState({ locationAddressReceived: true, locationAddress: data });
      })
  }

  render() {
    if (!this.state.infoWeatherReceived || !this.state.locationAddressReceived) {
      return (
        <div className={styles.loadingButtonContainer}>
          <Button variant="contained" color="primary">Loading Weather ...</Button>
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

export default Body;