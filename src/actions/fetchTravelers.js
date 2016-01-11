import constants from '../constants';
import apiCaller from '../apiCaller';

export default function fetchTravelers() {
  return dispatch => {

    return apiCaller.getTravelers()
      .then(travelers => dispatch({
        type: constants.TRAVELERS_FETCHED,
        travelers
      }));
  }
}