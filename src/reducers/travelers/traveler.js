import destinationsReducer from './destinations';

export default function travelerReducer(traveler = {}, action) {
  switch (action.type) {
    case 'DESTINATION_TOGGLE':
      return Object.assign(
        {},
        traveler,
        {
          needToSave: traveler.id === action.userId,
          destinations: destinationsReducer(traveler.destinations, action)
        }
      );
    case 'DESTINATION_SAVED':
      return Object.assign(
        {},
        traveler,
        {
          needToSave: false,
          destinations: destinationsReducer(traveler.destinations, action)
        }
      );
    default:
      return traveler;
  }
}