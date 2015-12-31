import { combineReducers } from 'redux';
import isLoading from './isLoading';
import currentUser from './currentUser';
import travelers from './travelers';
import panelOpenForUserId from './panelOpenForUserId';

export default {
  reducer: combineReducers({ isLoading, currentUser, travelers, panelOpenForUserId })
};


