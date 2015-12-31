import constants from '../constants';

export default function isLoading(isLoading = false, action) {
  switch (action.type) {
    case constants.LOGIN:
      return true;
    case constants.TURN_OFF_LOADING_STATE:
      return false;
    default:
      return isLoading;
  }
}