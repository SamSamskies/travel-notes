export default function destinationsReducer(destinations = [], action) {
  switch (action.type) {
    case 'DESTINATION_TOGGLE':
      return destinations.map(d => {
        if (d.name.toLowerCase() !== action.name.toLowerCase()) return d;
        return Object.assign({}, d, { visited: !d.visited });
      });
      return updatedDestinations;
    case 'DESTINATION_SAVED':
      return action.destinations;
    default:
      return destinations;
  }
}