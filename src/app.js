import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import MainNavbar from './components/MainNavbar';
import ApiCaller from './ApiCaller';
import Router from './Router';

const defaultState = {
  isLoading: false,
  currentUser: {},
  travelers: []
};
const store = createStore(reducer);
const mountNode = document.querySelector('#main-container');
const apiCaller = new ApiCaller();
const router = new Router({ store, mountNode, apiCaller });
const page = document.referrer.split('/').pop();

function reduceCurrentUser(currentUser = {}, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      const { id, name, token } = action;
      return Object.assign({}, currentUser, { id, name, token });
    default:
      return currentUser
  }
}

function reduceTravelers(travelers = [], action) {
  switch (action.type) {
    case 'TRAVELERS_FETCHED':
      return action.travelers;
    default:
      return travelers
  }
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        isLoading: true,
        currentUser: reduceCurrentUser(state.currentUser, action),
        travelers: reduceTravelers(state.travelers, action)
      });
    case 'LOGGED_IN':
      return Object.assign({}, state, {
        isLoading: false,
        currentUser: reduceCurrentUser(state.currentUser, action),
        travelers: reduceTravelers(state.travelers, action)
      });
    case 'TRAVELERS_FETCHED':
      return Object.assign({}, state, {
        isLoading: false,
        currentUser: reduceCurrentUser(state.currentUser, action),
        travelers: reduceTravelers(state.travelers, action)
      });
    default:
      return state
  }
}

Backbone.history.start({ pushState: true });
if (page === '404.html') router.redirect();

ReactDOM.render(<MainNavbar />, document.querySelector('#nav-container'));



