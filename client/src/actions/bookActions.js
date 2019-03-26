export function postBook(book, list) {
    console.log('in action postBook with', book, list);


    return (dispatch) => {
        dispatch({ type: "BEGIN_BOOKS_REQUEST" })

        const body = JSON.stringify({ book })

        return fetch('/api/parks', {
            method: 'POST',
            headers: { "Content-type": 'application/json' },
            body: body,
        })
            .then(resp => resp.json())
            .then(parks => dispatch({ type: 'ADD_BOOK', payload: book }))
    }
}
