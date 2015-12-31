import constants from '../constants';
import { pushPath } from 'redux-simple-router';
import fetchTravelers from './fetchTravelers';
import turnOffLoadingState from './turnOffLoadingState';

export default function handleSuccessfulLogin(currentUser) {
  return dispatch => {
    dispatch(Object.assign({}, currentUser, { type: constants.LOGGED_IN }));
    dispatch(fetchTravelers(currentUser.token));
    dispatch(pushPath('/travelers'));
    dispatch(turnOffLoadingState());
  }
}