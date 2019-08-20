import React, { Component } from 'react';

import horizontalScrollBarStyle from './horizontalScrollBar.module.css';

import Box from '@material-ui/core/Box';
import WeatherInformation from './weatherInformation';
import HourlyWeatherInformation from './hourlyWeatherInformation';
import LocationCard from './locationCard';
import RefreshButton from './refreshButton';
import LoadingWeatherCard from './loadingWeatherCard';

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
      return <LoadingWeatherCard />
    }
    else {
      return (
        <Box>
          <LocationCard mb={5} title="Location" data={this.state.locationAddress} />
          <WeatherInformation data={this.state.infoWeather} />
          <HourlyWeatherInformation className={horizontalScrollBarStyle} data={this.state.infoWeather} />
          <RefreshButton onClick={this.findCoordsAndCallAPIs} />
        </Box>
      )
    }
  }
}

export default Body;