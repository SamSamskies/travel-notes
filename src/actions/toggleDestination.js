import constants from '../constants';
import apiCaller from '../apiCaller';
import updateDestinations from './updateDestinations';

export default function toggleDestination(userId, currentUser, destinationName, destinations) {
  return dispatch => {
    const updatedDestinations = destinations.map(d => {
      if (d.name.toLowerCase() !== destinationName.toLowerCase()) return d;
      return Object.assign({}, d, { visited: !d.visited });
    });
    dispatch({ type: constants.DESTINATION_TOGGLE, userId, destinations: updatedDestinations });
    dispatch(updateDestinations(currentUser, updatedDestinations));
  }
}