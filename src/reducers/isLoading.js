export default function isLoading(isLoading = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return true;
    default:
      return isLoading;
  }
}