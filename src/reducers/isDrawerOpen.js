import constants from '../constants';

export default function isDrawerOpen(isDrawerOpen = false, action) {
  switch (action.type) {
    case constants.DRAWER_TOGGLE:
      return !isDrawerOpen;
    default:
      return isDrawerOpen;
  }
}