import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Main from './components/Main';

export default Backbone.Router.extend({
  routes: {
    '': 'redirect',
    'start': 'showStart',
    'travelers': 'showTravelers'
  },

  initialize(options = {}) {
    this.store = options.store;
    this.mountNode = options.mountNode;
    this.apiCaller = options.apiCaller;
  },

  redirect() {
    this.navigate('/start', { trigger: true });
  },

  showStart() {
    ReactDOM.render(
      <Login
        store={this.store}
        apiCaller={this.apiCaller}
        goToMainPage={authToken => {
          this.apiCaller.getTravelers(authToken)
            .then(res => {
              this.store.dispatch({
                type: 'TRAVELERS_FETCHED',
                travelers: res.body
              });
              this.navigate('/travelers', { trigger: true });
            });
        }}
      />, this.mountNode);
  },

  showTravelers() {
    ReactDOM.render(<Main store={this.store} apiCaller={this.apiCaller} />, this.mountNode);
  }
});