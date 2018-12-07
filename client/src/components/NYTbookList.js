import React, { Component } from 'react';
import axios from 'axios';

class NYTbookList extends Component {
  state = {
    books: []
  }

componentDidMount() {
  axios.get('/api/v1/books.json')
  .then(response => {
    console.log(response.data)
    this.setState({
      books: response.data
    })
  })
}

render() {
  console.log("nyt render", this.state.books)
  const renderBooks = this.state.books.map(book => <li>{ book.title} </li>)
  return(
    <div>
      {renderBooks}
    </div>
  )
}
}


export default NYTbookList;
