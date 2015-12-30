import React, {Component} from 'react';
import { ButtonInput, Input } from 'react-bootstrap';
import { pushPath } from 'redux-simple-router';
import apiCaller from '../apiCaller';

export default class Login extends Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const { isLoading } = store.getState().reducer;

    return (
      <form onSubmit={e => {
          const name = this.input.getValue();
          e.preventDefault();
          store.dispatch({ type: 'LOGIN', name });
          this._login(name);
        }}>
        <Input ref={node => this.input = node} type="text" label="Traveler's name" placeholder="Amos, Andy or Evie" autoFocus />
        <ButtonInput
          type="submit"
          bsStyle="primary"
          disabled={isLoading}
          block>
          {isLoading ? 'Loading...' : 'Enter'}
        </ButtonInput>
      </form>
    );
  }

  _login(name) {
    const { store } = this.context;

    apiCaller.login(name)
      .then(res => {
        const data = Object.assign({}, res.body, { type: 'LOGGED_IN' });
        store.dispatch(data);
        this._goToMainPage(data.token);
      });
  }

  _goToMainPage(authToken) {
    const { store } = this.context;

    apiCaller.getTravelers(authToken)
      .then(res => {
        store.dispatch({
          type: 'TRAVELERS_FETCHED',
          travelers: res.body
        });
        store.dispatch(pushPath('/travelers'));
      });
  }
};

Login.contextTypes = {
  store: React.PropTypes.object
}
