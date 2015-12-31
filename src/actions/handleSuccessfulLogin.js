import { pushPath } from 'redux-simple-router';
import fetchTravelers from './fetchTravelers';


export default function handleSuccessfulLogin(currentUser) {
  return dispatch => {
    dispatch(Object.assign({}, currentUser, { type: 'LOGGED_IN' }));
    dispatch(fetchTravelers(currentUser.token));
    dispatch(pushPath('/travelers'));
  }
}