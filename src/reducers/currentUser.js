export default function currentUser(currentUser = {}, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      const { id, name, token } = action;
      return Object.assign({}, currentUser, { id, name, token });
    default:
      return currentUser;
  }
}