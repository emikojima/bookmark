
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
      ...state, signUp: !action.user
    }

    case 'LOGIN_USER':
    return {
      ...state, username: action.user.username, lists: [action.user.lists], books: [action.user.books], loggedIn: true
    }

    case 'ADD_BOOK':
    debugger
    console.log('ADD_BOOK is returning..', { book: action.payload });
    return {
      ...state, books: [...state.books, action.book], lists: action.list
    }

    case 'ADD_PARKS':
      console.log('ADD_PARKS is returning..', { parks: action.payload });
      return { ...state, editingParks: false, parkToEdit: null, parks: action.payload }


    default:
    return state;
 }
};
