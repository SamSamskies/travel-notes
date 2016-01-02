import { pushPath } from 'redux-simple-router';
import constants from '../constants';
import apiCaller from '../apiCaller';
import handleSuccessfulLogin from './handleSuccessfulLogin';
import turnOffLoadingState from './turnOffLoadingState';

export default function login(name) {
  return dispatch => {
    dispatch({ type: constants.LOGIN, name });

    return apiCaller.login(name)
      .then(res => {
        dispatch(handleSuccessfulLogin(res.body));
      })
      .catch(() => {
        alert('Only valid users are Amos, Andy, or Evie');
        dispatch(turnOffLoadingState());
      });
  }
}