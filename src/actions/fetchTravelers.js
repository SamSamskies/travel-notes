import constants from '../constants';
import apiCaller from '../apiCaller';

export default function fetchTravelers(authToken) {
  return dispatch => {

    return apiCaller.getTravelers(authToken)
      .then(res => dispatch({
        type: constants.TRAVELERS_FETCHED,
        travelers: res.body
      }));
  }
}