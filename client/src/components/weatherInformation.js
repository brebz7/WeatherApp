import React from 'react';
import WeatherCard from './weatherCard.js';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const WeatherInformation = ({ data: { currently } }) => {
  return (
    <Box>
      <Grid container spacing={1} >
        <WeatherCard
          data={currently.summary}
          title={'Summary'} />
        <WeatherCard
          data={`${((currently.temperature - 32) * 5 / 9).toFixed(2)} °C`}
          title={'Temperature'} />
        <WeatherCard
          data={`${currently.pressure} pHa`}
          title={'Pressure'} />
        <WeatherCard
          data={`${currently.humidity} %`}
          title={'Humidity'} />
        <WeatherCard
          data={`${(currently.visibility * 1.6).toFixed(2)} Km`}
          title={'Visibility'} />
        <WeatherCard
          data={`${(currently.windSpeed * 1.6).toFixed(2)} Km/h`}
          title={'Wind Speed'} />
      </Grid>
    </Box>
  )
}

export default WeatherInformation;
