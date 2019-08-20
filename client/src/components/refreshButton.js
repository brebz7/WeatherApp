import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './CSS/comps.module.css';

const RefreshButton = (props) => {
  return (
    <div className={styles.refreshButtonContainer}>
      <Button
        variant="contained"
        color="primary"
        onClick={props.onClick}
        mb={2}>
        Refresh
    </Button>
    </div>

  );

}

export default RefreshButton;
