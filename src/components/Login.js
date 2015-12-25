import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'react-bootstrap';

export default class Login extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLoading: false
    };
  }

  render() {
    let isLoading = this.state.isLoading;
    return (
      <form>
        <Input type="text" label="Traveler's name" placeholder="Amos, Andy or Evie" autoFocus />
        <Button
          bsStyle="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleClick : null}
          block>
          {isLoading ? 'Loading...' : 'Enter'}
        </Button>
      </form>
    );
  }

  handleClick() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }
};
