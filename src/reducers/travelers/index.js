import constants from '../../constants';
import travelerReducer from './traveler';

export default function travelersReducer(travelers = [], action) {
  switch (action.type) {
    case constants.TRAVELERS_FETCHED:
      return action.travelers.map(t => travelerReducer(t, action));
    case constants.DESTINATION_TOGGLE:
    case constants.DESTINATION_DELETE:
    case constants.DESTINATIONS_UPDATE:
    case constants.DESTINATIONS_SAVED:
      return travelers.map(t => travelerReducer(t, action));
    default:
      return travelers;
  }
}

