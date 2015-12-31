import apiCaller from '../apiCaller';

export default function handleDestinationDelete(userId, currentUser, destinations) {
  return dispatch => {
    dispatch({ type: 'DESTINATION_DELETE', userId, destinations });

    return apiCaller.updateDestinations(destinations, currentUser.token, currentUser.id)
      .then(res => {
        console.log(res.body)
        dispatch({
          type: 'DESTINATIONS_SAVED',
          destinations: res.body.destinations
        });
      });
  }
}