import React from 'react';
import ReactDOM from 'react-dom';

import Container from '@material-ui/core/Container';
import Header from './components/header.js';
import Body from './components/body.js';

const App = () => {
  return (
  <Container maxWidth="sm">
    <Header />
    <Body />
  </Container>  
  )              
}

ReactDOM.render(<App />, document.getElementById('root'));
