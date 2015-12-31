import constants from '../constants';
import apiCaller from '../apiCaller';
import updateDestinations from './updateDestinations';

export default function addNewDestination(currentUser, destinationName, destinations) {
  return dispatch => {
    dispatch(updateDestinations(
      currentUser,
      destinations.concat({ name: destinationName, visited: false })
    ));
  }
}