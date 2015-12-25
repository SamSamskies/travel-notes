import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';

export default Backbone.Router.extend({

  routes: {
    '': 'redirect',
    'start': 'showStart',
    'travelers': 'showTravelers'
  },

  redirect() {
    this.navigate('/start', { trigger: true });
  },

  showStart() {
    console.log('start');
    ReactDOM.render(<Login />, document.querySelector('#main-container'));
  },

  showTravelers() {
    console.log('travelers');
  }

});