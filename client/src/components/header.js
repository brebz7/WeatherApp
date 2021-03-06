import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  typography: {
    alignItems: 'center'
  }
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.typography}>
        <Toolbar>
          <Typography variant="h6" color="inherit" align="center">
            WEATHER
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}