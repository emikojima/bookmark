import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
  username: "",
  userId: "",
  password: "",
  loggedIn: false,
  signUp: false,
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
      ...state, username: action.user.username, userId: action.user.id, loggedIn: true
    }

    case 'GET_USER_BOOKS_SUCCESS':
      console.log('GET USER BOOKS is returning', action);
      return {
        ...state, books: action.books[1]
      }

    case 'ADD_BOOK':
      console.log('ADD_BOOK is returning', action);
      return {
        ...state, books: action.book
      }


    default:
    return state;
 }
};
