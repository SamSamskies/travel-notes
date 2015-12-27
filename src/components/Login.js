import React, {Component} from 'react';
import { ButtonInput, Input } from 'react-bootstrap';

export default class Login extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store, apiCaller, goToMainPage } = this.props;
    const { isLoading } = store.getState();

    return (
      <form onSubmit={e => {
          const name = this.input.getValue();
          e.preventDefault();
          store.dispatch({ type: 'LOGIN', name });
          apiCaller.login(name)
            .then(res => {
              const data = Object.assign({}, res.body, { type: 'LOGGED_IN' });
              store.dispatch(data);
              goToMainPage(data.token);
            });
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
};
