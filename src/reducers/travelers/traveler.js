import constants from '../../constants';
import destinationsReducer from './destinations';

export default function travelerReducer(traveler = {}, action) {
  switch (action.type) {
    case constants.DESTINATION_TOGGLE:
    case constants.DESTINATION_ADD:
    case constants.DESTINATION_DELETE:
    case constants.DESTINATIONS_UPDATE:
    case constants.DESTINATIONS_SAVED:
      if (traveler.id != action.userId) return traveler;

      return Object.assign(
        {},
        traveler,
        {
          destinations: destinationsReducer(traveler.destinations, action)
        }
      );
    default:
      return traveler;
  }
}