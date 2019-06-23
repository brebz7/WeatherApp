import React from 'react';
import styles from './comps.module.css';

const WeatherInformation = (props) => {
  return (
    <div className={styles.weatherText}>
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
        Humidity: {props.data.currently.humidity}
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
    </div>
  )
}

export default WeatherInformation;