export default function destinationsReducer(destinations = [], action) {
  switch (action.type) {
    case 'DESTINATION_TOGGLE':
    case 'DESTINATION_DELETE':
    case 'DESTINATIONS_SAVED':
      return action.destinations;
    default:
      return destinations;
  }
}