import constants from '../constants';

export default function currentUser(currentUser = {}, action) {
  switch (action.type) {
    case constants.LOGGED_IN:
      const { id, name, token } = action;
      return Object.assign({}, currentUser, { id, name, token });
    default:
      return currentUser;
  }
}