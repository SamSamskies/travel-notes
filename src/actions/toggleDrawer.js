import constants from '../constants';

export default function toggleDrawer() {
  return dispatch => {
    dispatch({ type: constants.DRAWER_TOGGLE });
  }
}