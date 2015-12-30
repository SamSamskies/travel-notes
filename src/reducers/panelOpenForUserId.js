export default function panelOpenForUserIdReducer(panelOpenForUserId = {}, action) {
  const togglePanelOpenForUser = userId => {
    const clonedPanelOpenForUserId = Object.assign({}, panelOpenForUserId);
    const currentValue = panelOpenForUserId[userId];
    clonedPanelOpenForUserId[userId] = !currentValue;
    return clonedPanelOpenForUserId;
  }

  switch (action.type) {
    case 'LOGGED_IN':
      const { id } = action;
      return togglePanelOpenForUser(id);
    case 'TRAVELER_PANEL_CLICKED':
      const { userId } = action;
      return togglePanelOpenForUser(userId);
    default:
      return panelOpenForUserId;
  }
}