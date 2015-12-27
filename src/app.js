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
  travelers: [],
  panelOpenForUserId: {}
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
      return currentUser;
  }
}

function reduceTravelers(travelers = [], action) {
  switch (action.type) {
    case 'TRAVELERS_FETCHED':
      return action.travelers;
    default:
      return travelers;
  }
}

function reducePanelOpenForUserId(panelOpenForUserId = {}, action) {
  const togglePanelOpenForUser = userId => {
    const clonedPanelOpenForUserId = Object.assign({}, panelOpenForUserId);
    const currentValue = panelOpenForUserId[userId];
    clonedPanelOpenForUserId[userId] = !currentValue;
    return clonedPanelOpenForUserId;
  }

  switch (action.type) {
    case 'LOGGED_IN':
      const { id } = action;
      return togglePanelOpenForUser(id);
    case 'TRAVELER_PANEL_CLICKED':
      const { userId } = action;
      return togglePanelOpenForUser(userId);
    default:
      return panelOpenForUserId;
  }
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        isLoading: true,
        currentUser: reduceCurrentUser(state.currentUser, action),
        travelers: reduceTravelers(state.travelers, action),
        panelOpenForUserId: reducePanelOpenForUserId(state.panelOpenForUserId, action)
      });
    case 'LOGGED_IN':
      return Object.assign({}, state, {
        isLoading: false,
        currentUser: reduceCurrentUser(state.currentUser, action),
        travelers: reduceTravelers(state.travelers, action),
        panelOpenForUserId: reducePanelOpenForUserId(state.panelOpenForUserId, action)
      });
    case 'TRAVELERS_FETCHED':
      return Object.assign({}, state, {
        isLoading: false,
        currentUser: reduceCurrentUser(state.currentUser, action),
        travelers: reduceTravelers(state.travelers, action),
        panelOpenForUserId: reducePanelOpenForUserId(state.panelOpenForUserId, action)
      });
    case 'TRAVELER_PANEL_CLICKED':
      return Object.assign({}, state, {
        isLoading: false,
        currentUser: reduceCurrentUser(state.currentUser, action),
        travelers: reduceTravelers(state.travelers, action),
        panelOpenForUserId: reducePanelOpenForUserId(state.panelOpenForUserId, action)
      });
    default:
      return state
  }
}

Backbone.history.start({ pushState: true });
if (page === '404.html') router.redirect();

ReactDOM.render(<MainNavbar />, document.querySelector('#nav-container'));



