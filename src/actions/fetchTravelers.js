import apiCaller from '../apiCaller';

export default function fetchTravelers(authToken) {
  return dispatch => {

    return apiCaller.getTravelers(authToken)
      .then(res => dispatch({
        type: 'TRAVELERS_FETCHED',
        travelers: res.body
      }));
  }
}