import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
  username: "",
  userId: "",
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
      ...state, signUp: !action.user, userId: cuid()
    }

    case 'LOGIN_USER':
    return {
      ...state, username: action.user.username, lists: [action.user.lists], books: [action.user.books], userId: action.user.id, loggedIn: true
    }

    case 'BEGIN_BOOKS_POST':
      console.log('POST_BOOK is returning', { action});
      return {
        ...state,
      }

    case 'ADD_BOOK':
      console.log('ADD_BOOK is returning', { action});
      return {
        ...state, books: [...state.books, action.book]
      }


    default:
    return state;
 }
};
