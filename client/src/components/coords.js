import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './coords.module.css'

import WeatherInformation from './weatherInformation';

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
        <div>
          <p className={styles.coordsText}>
            Coords: {this.displayCoords()}
          </p>
          {/* <p className={styles.weatherText}>
            Weather: {this.state.infoWeather.currently.summary}
          </p> */}
          <WeatherInformation data={this.state.infoWeather}/>
          <Button variant="contained" color="primary" onClick={this.bringWeatherData}>Get Weather Info</Button>
        </div>
      )

    }
    // return (
    //   <div>
    //     <p className={styles.coordsText}>
    //       Coords: {this.displayCoords()}
    //     </p>
    //     <p className={styles.weatherText}>
    //       Weather: {this.state.infoWeather ? this.state.infoWeather.currently.summary : ''}
    //     </p>

    //     <Button variant="contained" color="primary" onClick={this.bringWeatherData}>Get Weather Info</Button>
    //   </div>
    // );
  }
}

export default Coords;

