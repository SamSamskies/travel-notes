const defaultState = {
  isLoading: false,
  currentUser: {},
  travelers: [],
  panelOpenForUserId: {}
};

function reducer(state = defaultState, action) {
  return {
    isLoading: isLoadingReducer(state.isLoading, action),
    currentUser: currentUserReducer(state.currentUser, action),
    travelers: travelersReducer(state.travelers, action),
    panelOpenForUserId: panelOpenForUserIdReducer(state.panelOpenForUserId, action)
  }
}

function isLoadingReducer(isLoading = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return true;
    default:
      return isLoading;
  }
}

function needToSaveReducer(needToSave = false, action) {
  switch (action.type) {
    case 'DESTINATION_TOGGLE':
      return true;
    default:
      return needToSave;
  }
}

function currentUserReducer(currentUser = {}, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      const { id, name, token } = action;
      return Object.assign({}, currentUser, { id, name, token });
    default:
      return currentUser;
  }
}

function destinationsReducer(destinations = [], action) {
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

function travelerReducer(traveler = {}, action) {
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

function travelersReducer(travelers = [], action) {
  switch (action.type) {
    case 'TRAVELERS_FETCHED':
      return action.travelers.map(t => travelerReducer(t, action));
    case 'DESTINATION_TOGGLE':
    case 'DESTINATION_SAVED':
      return travelers.map(t => travelerReducer(t, action));
    default:
      return travelers;
  }
}

function panelOpenForUserIdReducer(panelOpenForUserId = {}, action) {
  const togglePanelOpenForUser = userId => {
    const clonedPanelOpenForUserId = Object.assign({}, panelOpenForUserId);
    const currentValue = panelOpenForUserId[userId];
    clonedPanelOpenForUserId[userId] = !currentValue;
    return clonedPanelOpenForUserId;
  }

  switch (action.type) {
    case 'LOGGED_IN':
      const { id } = action;
      return togglePanelOpenForUser(id);
    case 'TRAVELER_PANEL_CLICKED':
      const { userId } = action;
      return togglePanelOpenForUser(userId);
    default:
      return panelOpenForUserId;
  }
}

export default { reducer };


