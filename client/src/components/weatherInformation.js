import React from 'react';
import styles from './comps.module.css';
import WeatherCard from './weatherCard.js';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const WeatherInformation = (props) => {
  return (
    <Box>
      <Grid container spacing={2} alignItems="space-between">
        <Grid item md={6}>
          <WeatherCard
            data={props.data.currently.summary}
            title={'Summary'} />
        </Grid>
        <Grid item md={6}>
          <WeatherCard

            data={`${((props.data.currently.temperature - 32) * 5 / 9).toFixed(2)} °C`}
            title={'Temperature'} />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="space-between">
        <Grid item md={6}>
          <WeatherCard
            data={`${props.data.currently.pressure} pHa`}
            title={'Pressure'} />
        </Grid>
        <Grid item md={6}>
          <WeatherCard
            data={`${props.data.currently.humidity} %`}
            title={'Humidity'} />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="space-between">
        <Grid item md={6}>
          <WeatherCard
            data={`${(props.data.currently.visibility * 1.6).toFixed(2)} Km`}
            title={'Visibility'} />
        </Grid>
        <Grid item md={6}>
          <WeatherCard
            data={`${(props.data.currently.windSpeed * 1.6).toFixed(2)} Km/h`}
            title={'Wind Speed'} />
        </Grid>
      </Grid>
    </Box>

  )
}

export default WeatherInformation;

{/* <div className={styles.weatherText}>
      <p>
        Weather Summary: {props.data.currently.summary}
      </p>
      <p>
        Time: {props.data.currently.time}
      </p>
      <p>
        Temperature: {props.data.currently.temperature}°F /
        {((props.data.currently.temperature - 32) * 5 / 9).toFixed(2)}°C
      </p>
      <p>
        Humidity: {props.data.currently.humidity} %
      </p>
      <p>
        Pressure: {props.data.currently.pressure}
      </p>
      <p>
        Visibility: {props.data.currently.visibility}
      </p>
      <p>
        Windspeed: {props.data.currently.windSpeed}
      </p>
    </div> */}