import { combineReducers } from 'redux';
import isLoading from './isLoading';
import isDrawerOpen from './isDrawerOpen';
import currentUser from './currentUser';
import travelers from './travelers';
import panelOpenForUserId from './panelOpenForUserId';

export default {
  reducer: combineReducers({
    isLoading,
    isDrawerOpen,
    currentUser,
    travelers,
    panelOpenForUserId
  })
};


