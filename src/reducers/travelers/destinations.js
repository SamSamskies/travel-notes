import constants from '../../constants';

export default function destinationsReducer(destinations = [], action) {
  switch (action.type) {
    case constants.DESTINATION_TOGGLE:
    case constants.DESTINATION_DELETE:
    case constants.DESTINATIONS_SAVED:
      return action.destinations;
    default:
      return destinations;
  }
}