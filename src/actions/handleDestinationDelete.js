import constants from '../constants';
import apiCaller from '../apiCaller';

export default function handleDestinationDelete(userId, currentUser, destinations) {
  return dispatch => {
    dispatch({ type: constants.DESTINATION_DELETE, userId, destinations });

    return apiCaller.updateDestinations(destinations, currentUser.token, currentUser.id)
      .then(res => {
        console.log(res.body)
        dispatch({
          type: constants.DESTINATIONS_SAVED,
          userId,
          destinations: res.body.destinations
        });
      });
  }
}