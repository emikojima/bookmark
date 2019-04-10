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
    ...state, signUp: true
    };

  case 'SIGNUP_USER':
    console.log("signup", action.user);
    return{
      ...state, loggedIn: true, username: action.user.username, password: action.user.password, signUp: false
    };

  case 'LOGIN_USER':
    console.log("loginuser reducer", action);

    return {
      ...state, username: action.user.username, userId: action.user.id, password: action.user.password, loggedIn: true
    };

    case 'LOGINFORREFRESH':
      return {
        ...state, userId: action.userId
      }

    case 'LOGOUT_USER':
    console.log("logout user", action, initialState)
    return {
      ...initialState
    }

  case 'GET_USER_BOOKS_SUCCESS':
    console.log('GET USER BOOKS is returning', action);
    return {
      ...state, books: action.books[1]
    };

  case 'GET_NYT_BOOKS_SUCCESS':
    console.log('GET NYT BOOKS is returning', action);
    return{
      ...state, nytbooks: action.books
    };

  case 'ADD_BOOK':
    console.log('ADD_BOOK is returning', action);
    return {
      ...state, books: [ action.book, ...state.books]
    };

  case 'UPDATE_BOOK':
    console.log("UPDATE_BOOK REDUCER is returning", action)
    const allbooks = [...state.books]
    const index = allbooks.findIndex(book => book.id === action.book.id)
    allbooks[index].notes = action.book.notes
     return {
       ...state, books: allbooks
     };
     // whatever is returned is the new state for the store.
     // there is also the old state.
     // which component is not rerendering?
     // must be the props didn't change. must mean that shallowCompare doesn't think a change happened.
     // the key in mapStateToProps === that key on the returned state

  case 'DELETE_USER_BOOK_SUCCESS':
    console.log('DELETE USER BOOKS SUC is returning', action);
    const books = state.books.filter(book => book.id !== action.book.id)
    return {
      ...state, books: books
    };

  default:
    return state;
 }
};
