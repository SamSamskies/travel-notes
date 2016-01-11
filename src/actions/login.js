import { pushPath } from 'redux-simple-router';
import constants from '../constants';
import apiCaller from '../apiCaller';
import handleSuccessfulLogin from './handleSuccessfulLogin';
import turnOffLoadingState from './turnOffLoadingState';

export default function login(name) {
  return dispatch => {
    dispatch({ type: constants.LOGIN, name });

    return apiCaller.login(name)
      .then(t => dispatch(handleSuccessfulLogin(t)))
      .catch((e) => {
        alert('Only valid users are Amos, Andy, or Evie');
        dispatch(turnOffLoadingState());
      });
  }
}