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

function createAddress(data) {
  let address = data
    .filter(addrCateg => addrCateg ? addrCateg : null)
    .slice(0, 3)
    .toString()
    .replace(/,/g, ', ');
    
  return address;
};

const LocationCard = ({ title, data }) => {
  const classes = useStyles();
  const address = createAddress(data);

  return (
    <Box mt={1} mb={2}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.data} variant="h5" component="h2">
            {address}
          </Typography>
        </CardContent>
      </Card>
    </Box>

  );
};

export default LocationCard;