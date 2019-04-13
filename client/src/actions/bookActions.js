const setBooks = books => {
  console.log("setbooks", books)
  return {
  type: 'GET_USER_BOOKS_SUCCESS',
  books
  }
}
export const setGenre = genre => {
console.log("setGenre", genre)
  return {type: 'SET_GENRE',
  genre}
}

const deleteBook = book => {
  console.log("deleteBook", book)
  return {
    type: 'DELETE_USER_BOOK_SUCCESS',
    book
  }
}

const updateBook = book => {
  console.log("updateBook action", book)
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
  console.log("getNytBooks")

  return (dispatch) => {
    return fetch(`/api/v1/${genre}`)
    .then(resp => resp.json())
    .then(books => dispatch(setNytBooks(books)))
  }
}

export const getUserBooks = (user) => {
  console.log("getUserBooks action", user)
  return (dispatch) => {
    return fetch(`/api/v1/users/${user}/books`)
    .then(resp => resp.json())
    .then(books => {if (books.error){alert(books.error)} else dispatch(setBooks(books))})
    .catch(error => console.log(error))
  }
}

export const postBook = (book, userId) => {
    console.log('in action postBook with', book, userId);
    return (dispatch) => {
      const user = userId
      const body = JSON.stringify({title: book.title, description: book.description, author: book.author, isbns: book.isbns, user_id: user})
      console.log("fetch disp",body, user)
      return fetch(`/api/v1/users/${user}/books`, {
        method: 'POST',
        headers: { "Content-type": 'application/json', 'Authorization': sessionStorage.jwt },
        body: body
        })
        .then(resp => resp.json())
        .then(book => {
          dispatch({ type: 'ADD_BOOK', book })
          alert("Your book has been added!")})
  }
}

export const deleteUserBook = (book) => {
  console.log("deleteUserBook action", book)
  return (dispatch) => {
    return fetch(`/api/v1/users/${book.user_id}/books/${book.id}`, {
      method: 'DELETE',
      headers: {"Content-Type": 'application/json'},
    })
    .then(() => console.log("book was deleted"))
    .then(() => dispatch(deleteBook(book)))
    .catch(error => console.log(error));
  }
}

export const addBookNote = (book) => {
  console.log("addBookNote action", book)
  const body = JSON.stringify({title: book.title, description: book.description, author: book.author, isbns: book.isbns, user_id: book.user_id, notes: book.notes})
  return (dispatch) => {
  return fetch(`/api/v1/users/${book.user_id}/books/${book.id}`, {
    method: 'PUT',
    headers: {"Content-type": 'application/json' },
    body: body
  })
  .then(resp => resp.json())
  .then(data => dispatch(updateBook(book)))
  .catch(error => console.log(error));
  }
}
