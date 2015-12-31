import constants from '../constants';

export default function handleTravelerPanelClick(userId) {
  return dispatch => {
    dispatch({ type: constants.TRAVELER_PANEL_CLICKED, userId });
  }
}