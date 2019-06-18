import React from 'react';
import styles from './header.module.css';
import Icon from '@material-ui/core/Icon';

const Header = () => {
  return ( 
    <h1 className={styles.headerText}>
      WeatherApp<Icon>wb_sunny</Icon>
    </h1>
   );
}
 
export default Header;