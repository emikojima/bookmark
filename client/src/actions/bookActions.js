export const postBook = (book, userId) => {
    console.log('in action postBook with', book, userId);

    return (dispatch) => {
        const body = JSON.stringify({ book })
        const user = userId
        return fetch(`/api/v1/users/${user}/books`, {
            method: 'POST',
            headers: { "Content-type": 'application/json' },
            body: body,
        })
            .then(resp => console.log("bookaction",resp.json()))
            .then(book => dispatch({ type: 'ADD_BOOK', payload: book }))
    }
}
