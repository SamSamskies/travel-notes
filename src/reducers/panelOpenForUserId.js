import constants from '../constants';

export default function panelOpenForUserId(panelOpenForUserId = {}, action) {
  const togglePanelOpenForUser = userId => {
    const clonedPanelOpenForUserId = Object.assign({}, panelOpenForUserId);
    const currentValue = panelOpenForUserId[userId];
    clonedPanelOpenForUserId[userId] = !currentValue;
    return clonedPanelOpenForUserId;
  }

  switch (action.type) {
    case constants.LOGGED_IN:
      const { id } = action;
      return togglePanelOpenForUser(id);
    case constants.TRAVELER_PANEL_CLICKED:
      const { userId } = action;
      return togglePanelOpenForUser(userId);
    default:
      return panelOpenForUserId;
  }
}