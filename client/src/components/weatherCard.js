import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    flex: 1
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WeatherCard({title, data}) {
  const classes = useStyles();

  return (
    <Grid item md={6} xs={12} >
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {data}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}