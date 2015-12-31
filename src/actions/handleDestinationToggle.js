import constants from '../constants';
import apiCaller from '../apiCaller';

export default function handleDestinationToggle(userId, currentUser, destinations) {
  return dispatch => {;
    dispatch({ type: constants.DESTINATION_TOGGLE, userId, destinations });

    return apiCaller.updateDestinations(destinations, currentUser.token, currentUser.id)
      .then(res => {
        console.log(res.body)
        dispatch({
          type: constants.DESTINATIONS_SAVED,
          destinations: res.body.destinations
        });
      });
  }
}