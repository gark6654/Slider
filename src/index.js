import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider/Slider';


ReactDOM.render(
    <Slider autoPlay={true} duration={2}>
        <img alt='img' src='./img/1.jpg' />
        <img alt='img' src='./img/2.jpg' />
        <img alt='img' src='./img/3.jpg' />
        <img alt='img' src='./img/4.jpg' />
        <img alt='img' src='./img/5.jpg' />
    </Slider>,
    document.getElementById('root')
);