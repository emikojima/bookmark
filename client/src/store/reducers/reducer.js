const initialState = {
  username: "",
  userId: "",
  password: "",
  loggedIn: false,
  signUp: false,
  books: [],
  fiction: [],
  nonfiction: [],
  science: [],
  loading: false,
  genre: "fiction",
  listDate: ""
}

export default function reducer(state = initialState, action) {
 switch (action.type) {
  case 'SHOW_SIGN_UP':
    return {
    ...state, signUp: true
    };

  case 'LOADING_USER_INFO':
    return {...state, loading: "true"};

  case 'LOADING_BOOKS':
    return {...state, loading: "true"};

  case 'SIGNUP_USER':
    console.log("signup", action.user);
    return{
      ...state, loggedIn: true, username: action.user.username, password: action.user.password, signUp: false
    };

  case 'LOGIN_USER':
    return {
      ...state, username: action.user.username, userId: action.user.id, password: action.user.password, loggedIn: true, loading: false
    };

  case 'LOGINFORREFRESH':
    return {
      ...state, userId: action.userId, username: action.username
    }

  case 'LOGOUT_USER':
    return {
      ...initialState
    }

  case 'GET_USER_BOOKS_SUCCESS':
    return {
      ...state, books: action.books[1], loading: false
    };

  case 'GET_NYT_BOOKS_SUCCESS':
    return{
      ...state, fiction: action.books, listDate: action.books[0].best_seller_date, loading: false
    };

  case 'GET_NYT_BOOKS_SUCCESS_nonfiction':
    return{
      ...state, nonfiction: action.books, loading: false
    };

  case 'GET_NYT_BOOKS_SUCCESS_science':
    return{
      ...state, science: action.books, loading: false
    };

  case 'SET_GENRE':
    return{
      ...state, genre: action.genre
    }

  case 'ADD_BOOK':
    return {
      ...state, books: [ action.book, ...state.books]
    };

  case 'UPDATE_BOOK':
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
    const books = state.books.filter(book => book.id !== action.book.id)
    return {
      ...state, books: books
    };
    default:
      return state;
  }
}
