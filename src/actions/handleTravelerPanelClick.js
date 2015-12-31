export default function handleTravelerPanelClick(userId) {
  return dispatch => {
    dispatch({ type: 'TRAVELER_PANEL_CLICKED', userId });
  }
}