import constants from '../constants';
import apiCaller from '../apiCaller';
import updateDestinations from './updateDestinations';

export default function addNewDestination(currentUser, destinationName, destinations) {
  return dispatch => {
    const updatedDestinations = destinations.concat({ name: destinationName, visited: false });
    const userId = currentUser.id;

    dispatch({ type: constants.DESTINATION_ADD, userId, destinations: updatedDestinations });
    dispatch(updateDestinations(currentUser, updatedDestinations));
  }
}