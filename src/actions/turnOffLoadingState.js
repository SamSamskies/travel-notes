import constants from '../constants';

export default function turnOffLoadingState() {
  return dispatch => {
    dispatch({ type: constants.TURN_OFF_LOADING_STATE });
  }
}