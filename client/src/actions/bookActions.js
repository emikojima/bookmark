const setBooks = books => {
  console.log("setbooks", books)
  return {
  type: 'GET_USER_BOOKS_SUCCESS',
  books
}}

const deleteBook = book => {
  console.log("deleteBook", book)
  return {
    type: 'DELETE_USER_BOOK_SUCCESS',
    book
  }
}

// asynch actions


export const getUserBooks = (user) => {
    console.log("getUserBooks action", user)
  return (dispatch) => {
    return fetch(`/api/v1/users/${user}/books`)
    .then(resp => resp.json())
    .then(books => dispatch(setBooks(books)))
    .catch(error => console.log(error))
  }
}

export const postBook = (book, userId) => {
    console.log('in action postBook with', book, userId);
    return (dispatch) => {
        const user = userId
        const body = JSON.stringify({title: book.title, description: book.description, author: book.author, user_id: user})

        console.log("fetch disp",body, user)
        return fetch(`/api/v1/users/${user}/books`, {
            method: 'POST',
            headers: { "Content-type": 'application/json' },
            body: body
        })
            .then(resp => resp.json())
            .then(book => dispatch({ type: 'ADD_BOOK', book }))
    }
}

export const deleteUserBook = (book) => {
    console.log("deleteUserBook action", book)
  return (dispatch) => {
    return fetch(`api/v1/users/${book.user_id}/books/${book.id}`, {
      method: 'DELETE',
      headers: {"Content-Type": 'application/json'},
    })
    .then(() => console.log("book was deleted"))
            .then(() => dispatch(deleteBook(book)))
    .catch(error => console.log(error));


  }
}
