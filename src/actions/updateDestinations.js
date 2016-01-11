import constants from '../constants';
import apiCaller from '../apiCaller';

export default function updateDestinations(currentUser, destinations) {
  return dispatch => {
    const userId = currentUser.id;

    return apiCaller.updateDestinations(destinations)
      .then(destinations => {
        dispatch({
          type: constants.DESTINATIONS_SAVED,
          userId,
          destinations
        });
      });
  }
}