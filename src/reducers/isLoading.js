import constants from '../constants';

export default function isLoading(isLoading = false, action) {
  switch (action.type) {
    case constants.LOGIN:
      return true;
    default:
      return isLoading;
  }
}