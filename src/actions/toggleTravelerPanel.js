import constants from '../constants';

export default function toggleTravelerPanel(userId) {
  return dispatch => {
    dispatch({ type: constants.TRAVELER_PANEL_CLICKED, userId });
  }
}