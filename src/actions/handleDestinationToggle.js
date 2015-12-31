import apiCaller from '../apiCaller';

export default function handleDestinationToggle(userId, currentUser, destinations) {
  return dispatch => {
    dispatch({ type: 'DESTINATION_TOGGLE', userId, destinations });

    return apiCaller.updateDestinations(destinations, currentUser.token, currentUser.id)
      .then(res => {
        console.log(res.body)
        dispatch({
          type: 'DESTINATION_SAVED',
          destinations: res.body.destinations
        });
      });
  }
}