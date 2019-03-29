import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
  username: "",
  userId: "",
  password: "",
  loggedIn: false,
  signUp: false,
  books: [],
  nytbooks: []
}

export default function reducer(state = initialState, action) {
 switch (action.type) {
   case 'SHOW_SIGN_UP':
    return {
      ...state, signUp: !action.user
    }

    case 'SIGNUP_USER': {
      console.log("signup", action.user)
      return{
        ...state, loggedIn: true, username: action.user.username, password: action.user.password
      }
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

    case 'GET_NYT_BOOKS_SUCCESS':
    console.log('GET NYT BOOKS is returning', action);
    return{
      ...state, nytbooks: action.books
    }

    case 'ADD_BOOK':
      console.log('ADD_BOOK is returning', action);
      return {
        ...state, books: [ action.book, ...state.books]
      }

    case 'DELETE_USER_BOOK_SUCCESS':
      console.log('DELETE USER BOOKS SUC is returning', action);
      const books = state.books.filter(book => book.id !== action.book.id)
      return {
        ...state, books: books
      }


    default:
    return state;
 }
};
