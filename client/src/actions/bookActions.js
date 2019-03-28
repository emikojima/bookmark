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
