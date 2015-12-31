import travelerReducer from './traveler';

export default function travelersReducer(travelers = [], action) {
  switch (action.type) {
    case 'TRAVELERS_FETCHED':
      return action.travelers.map(t => travelerReducer(t, action));
    case 'DESTINATION_TOGGLE':
    case 'DESTINATION_DELETE':
    case 'DESTINATIONS_SAVED':
      return travelers.map(t => travelerReducer(t, action));
    default:
      return travelers;
  }
}

