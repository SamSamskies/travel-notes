import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { Button, Input } from 'react-bootstrap';
import router from '../router';
import currentUser from '../currentUser';

export default class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isLoading: false
    };
  }

  render() {
    let isLoading = this.state.isLoading;
    return (
      <form onSubmit={!isLoading ? this.handleSubmit : null}>
        <Input ref="name" type="text" label="Traveler's name" placeholder="Amos, Andy or Evie" autoFocus />
        <Button
          bsStyle="primary"
          disabled={isLoading}
          block>
          {isLoading ? 'Loading...' : 'Enter'}
        </Button>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({isLoading: true});
    let name = this.refs.name.getValue();

    request
      .post('https://young-beyond-8772.herokuapp.com/auth')
      .send({ name })
      .end(function(err, res) {
        this.setState({isLoading: false});

        if (err) return // just ignore errors for now;

        const { name, token } = res.body;

        currentUser.set({ name, token });
        router.navigate('/travelers', { trigger: true });
      }.bind(this));
  }
};
