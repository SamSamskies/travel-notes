import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import MainNavbar from './components/MainNavbar';
import ApiCaller from './ApiCaller';
import Router from './Router';

const defaultState = {
  isLoading: false,
  currentUser: {}
};
const store = createStore(reducer);
const apiCaller = new ApiCaller(store);
const mountNode = document.querySelector('#main-container');
const router = new Router({ store, mountNode, apiCaller });
const page = document.referrer.split('/').pop();

function reduceToCurrentUser(state = {}, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      const { id, name, token } = action;
      return Object.assign({}, state, { id, name, token });
    default:
      return state
  }
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        isLoading: true,
        currentUser: reduceToCurrentUser(state.currentUser, action)
      });
    case 'LOGGED_IN':
      router.navigate('/travelers', { trigger: true });
      return Object.assign({}, state, {
        isLoading: false,
        currentUser: reduceToCurrentUser(state.currentUser, action)
      });
    default:
      return state
  }
}

Backbone.history.start({ pushState: true });
if (page === '404.html') router.redirect();

ReactDOM.render(<MainNavbar />, document.querySelector('#nav-container'));



