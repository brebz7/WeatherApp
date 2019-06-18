import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Coords extends Component {
  state = {
    coords: {},
    vremea: ''
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

  logMe = () => {
    let coords = this.state.coords;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coords)
    }
    console.log(coords);
    fetch(`/api/coords`, options)
      .then(response => response.json())
      .then(vremea => this.setState({ vremea }));
  }

  render() {
    return (
      <div>
        <p>Coords: {this.displayCoords()}</p>
        <p>Weather: {this.state.vremea}</p>
        <Button variant="contained" color="primary" onClick={this.logMe}>Get Weather Info</Button>
      </div>
    );
  }
}

export default Coords;

