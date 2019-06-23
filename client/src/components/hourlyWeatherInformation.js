import React from 'react';
import styles from './comps.module.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(time, temperature) {
  return { time, temperature }
}


const HourlyWeatherInformation = (props) => {
  const rows = [];
  for (let i = 1; i <= 24; i++)
    rows.push(createData(props.data.hourly.data[i].time, props.data.hourly.data[i].temperature));

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        {<TableBody>
          <TableRow>
            {rows.map(row => (
              <TableCell>{row.time}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {rows.map(row => (
              <TableCell>{row.temperature}</TableCell>
            ))}
          </TableRow>
        </TableBody>}

      </Table>
    </Paper>
  );
}

export default HourlyWeatherInformation;