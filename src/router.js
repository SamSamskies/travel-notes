import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Main from './components/Main';
import currentUser from './currentUser';

const mountNode = document.querySelector('#main-container');
const Router = Backbone.Router.extend({

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
    ReactDOM.render(<Login />, mountNode);
  },

  showTravelers() {
    console.log('travelers');
    ReactDOM.render(<Main />, mountNode);
  }

});
const router = new Router();

export default router;