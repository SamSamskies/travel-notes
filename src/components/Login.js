import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'react-bootstrap';
import LoadingButton from './LoadingButton';

export default class Login extends Component {
  render() {
    return (
      <form>
        <Input type="text" label="Traveler's name" placeholder="Amos, Andy or Evie" />
        <LoadingButton bsStyle="primary" block>Enter</LoadingButton>
      </form>
    );
  }
};
