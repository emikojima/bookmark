const setBooks = books => {
  return {
  type: 'GET_USER_BOOKS_SUCCESS',
  books
  }
}
export const setGenre = genre => {
  return {type: 'SET_GENRE',
  genre}
}

const deleteBook = book => {
  return {
    type: 'DELETE_USER_BOOK_SUCCESS',
    book
  }
}

const updateBook = book => {
  return {
    type: 'UPDATE_BOOK',
    book
  }
}

const setNytBooks = books => {
  return {
    type: 'GET_NYT_BOOKS_SUCCESS', books
  }
}

// asynch actions
export const getNytBooks = (genre) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_BOOKS" })
    return fetch(`/api/v1/${genre}`)
    .then(resp => resp.json())
    .then(books => dispatch(setNytBooks(books)))
  }
}

export const getUserBooks = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_BOOKS" })
    return fetch(`/api/v1/users/${user}/books`)
    .then(resp => resp.json())
    .then(books => {if (books.error){alert(books.error)} else dispatch(setBooks(books))})
    .catch(error => console.log(error))
  }
}

export const postBook = (book, userId) => {
    return (dispatch) => {
      const user = userId
      const body = JSON.stringify({title: book.title, description: book.description, author: book.author, isbns: book.isbns, user_id: user})
      return fetch(`/api/v1/users/${user}/books`, {
        method: 'POST',
        headers: { "Content-type": 'application/json', 'Authorization': sessionStorage.jwt },
        body: body
        })
        .then(resp => resp.json())
        .then(book => {
          dispatch({ type: 'ADD_BOOK', book })
          dispatch({ type: 'ADD_ALERT_MESSAGE', message: {text: "Your Book has been Added!", type: "success"}})})
  }
}

export const deleteUserBook = (book) => {
  return (dispatch) => {
    return fetch(`/api/v1/users/${book.user_id}/books/${book.id}`, {
      method: 'DELETE',
      headers: {"Content-Type": 'application/json'},
    })
    .then(() => dispatch({ type: 'ADD_ALERT_MESSAGE', message:{text: "Your book has been deleted", type: "success"}}))
    .then(() => dispatch(deleteBook(book)))
    .catch(error => console.log(error));
  }
}

export const addBookNote = (book) => {
  const body = JSON.stringify({title: book.title, description: book.description, author: book.author, isbns: book.isbns, user_id: book.user_id, notes: book.notes})
  return (dispatch) => {
  return fetch(`/api/v1/users/${book.user_id}/books/${book.id}`, {
    method: 'PUT',
    headers: {"Content-type": 'application/json' },
    body: body
  })
  .then(resp => resp.json())
  .then(data => dispatch(updateBook(book)))
  .catch(error => alert(error));
  }
}
