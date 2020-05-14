import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider/Slider';

ReactDOM.render(
  <Slider autoPlay={true} duration={2}>
      <img alt='img' src='./img/293.jpg' />
      <img alt='img' src='./img/296.jpg' />
      <img alt='img' src='./img/298.jpeg' />
      <img alt='img' src='./img/299.jpeg' />
  </Slider>,
  document.getElementById('root')
);