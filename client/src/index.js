import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header.js';
import Coords from './components/coords.js'

import Container from '@material-ui/core/Container';


const App = () => {
  return (
  <Container maxWidth="sm">
    <Header />
    <Coords />
  </Container>  
  )             
}

ReactDOM.render(<App />, document.getElementById('root'));
