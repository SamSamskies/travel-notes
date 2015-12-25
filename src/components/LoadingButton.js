import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

export default class LoadingButton extends Component {
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
      <Button
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
        {...this.props}>
        {isLoading ? 'Loading...' : this.props.children}
      </Button>
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