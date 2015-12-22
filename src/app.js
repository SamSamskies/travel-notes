import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

let mountNode = document.querySelector('#main-container');

ReactDOM.render(<Button bsStyle="primary">Default button</Button>, mountNode);