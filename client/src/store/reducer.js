
const initialState = {
  username: "",
  password: "",
  loggedIn: false,
  signUp: false,
  lists: [],
  books: []
}

export default function reducer(state = initialState, action) {
 switch (action.type) {
   case 'SHOW_SIGN_UP':
    return {
      ...state, signUp: !action.user
    }

    case 'LOGIN_USER':
    return {
      ...state, username: action.user.username, lists: [action.user.lists], books: [action.user.books], loggedIn: true
    }

    default:
    return state;
 }
};
