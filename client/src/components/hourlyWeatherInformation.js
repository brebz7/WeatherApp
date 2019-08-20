import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import styles from './CSS/horizontalScrollBar.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createTimeAndTempObj(time, temperature) {
  return { time, temperature }
}

const HourlyWeatherInformation = ({ data: { hourly } }) => {
  const classes = useStyles();
  const hourlyWeatherDataArray = [];
  for (let i = 1; i <= 24; i++)
    hourlyWeatherDataArray.push(createTimeAndTempObj(hourly.data[i].time, hourly.data[i].temperature));

  return (
    <div className={styles.horizontalScrollBarStyle}>
      <Box mb={2}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            {<TableBody>
              <TableRow>
                {hourlyWeatherDataArray.map((hourlyWeatherData, i) => (
                  <TableCell key={i}>{hourlyWeatherData.time}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                {hourlyWeatherDataArray.map((hourlyWeatherData, i) => (
                  <TableCell key={i}>{hourlyWeatherData.temperature}</TableCell>
                ))}
              </TableRow>
            </TableBody>}
          </Table>
        </Paper>
      </Box>
    </div>
  );
}

export default HourlyWeatherInformation;