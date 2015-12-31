import destinationsReducer from './destinations';

export default function travelerReducer(traveler = {}, action) {
  switch (action.type) {
    case 'DESTINATION_TOGGLE':
    case 'DESTINATION_SAVED':
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