import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    flex: 1
  },
  title: {
    fontSize: 14,
    textAlign: 'center'
  },
  data: {
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function LocationCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography className={classes.data} variant="h5" component="h2">
          {props.data}
        </Typography>
      </CardContent>
    </Card>
  );
}