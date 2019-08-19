import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
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
    <Box mt={1} mb={2}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.title}
          </Typography>
          <Typography className={classes.data} variant="h5" component="h2">
            {props.data.town}, {props.data.county}
          </Typography>
        </CardContent>
      </Card>
    </Box>

  );
}