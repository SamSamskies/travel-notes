import isLoadingReducer from './isLoading';
import currentUserReducer from './currentUser';
import travelersReducer from './travelers';
import panelOpenForUserIdReducer from './panelOpenForUserId';

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

export default { reducer };


