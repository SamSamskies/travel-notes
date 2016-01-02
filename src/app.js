import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, Redirect } from 'react-router';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import { Provider } from 'react-redux';
import { createHistory, useBasename } from 'history';
import reducers from './reducers';
import { App, Login, Travelers } from './components';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const history = useBasename(createHistory)({ basename: '/travel-notes' });

syncReduxAndRouter(history, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="start" />
      <Route component={App}>
        <Route path="start" component={Login}/>
        <Route path="travelers" component={Travelers}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('mount'));



