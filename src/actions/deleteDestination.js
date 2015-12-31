import constants from '../constants';
import apiCaller from '../apiCaller';
import updateDestinations from './updateDestinations';

export default function deleteDestination(userId, currentUser, destinationName, destinations) {
  return dispatch => {
    const updatedDestinations = destinations.reduce((memo, d) => {
      if (d.name.toLowerCase() === destinationName.toLowerCase()) return memo;
      return memo.concat([d]);
    }, []);
    dispatch({ type: constants.DESTINATION_DELETE, userId, destinations: updatedDestinations });
    dispatch(updateDestinations(currentUser, updatedDestinations));
  }
}