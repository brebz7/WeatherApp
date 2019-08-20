import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './comps.module.css';

const LoadingWeatherCard = () => {
  return (
    <div className={styles.loadingButtonContainer}>
      <Button variant="contained" color="primary">Loading Weather ...</Button>
    </div>
  );
}

export default LoadingWeatherCard;