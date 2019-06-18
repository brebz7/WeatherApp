import React from 'react';
import ReactDOM from 'react-dom';

import Body from './components/body.js'
import Header from './components/header.js';
import Coords from './components/coords.js'


const App = () => {
  return (
    <Body>
      <Header />
      <Coords />
    </Body>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
