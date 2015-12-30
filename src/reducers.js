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

function currentUserReducer(currentUser = {}, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      const { id, name, token } = action;
      return Object.assign({}, currentUser, { id, name, token });
    default:
      return currentUser;
  }
}

function travelersReducer(travelers = [], action) {
  switch (action.type) {
    case 'TRAVELERS_FETCHED':
      return action.travelers;
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


