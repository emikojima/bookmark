import React, { Component } from 'react';
import axios from 'axios';
import './NYTbookList.css';
import NavBarcomp from './NavBarcomp'
import { connect } from 'react-redux'


class NYTbookList extends Component {
  state = {
    list: "To Read",
    books: [],
    userbooks: []
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
  console.log("userbooks", this.state.userbooks)
  console.log("nyt render", this.state.books)
  const renderBooks = this.state.books.map((book, id) =>

    <a href='#'><li
      key={book.rank}
      onClick={() => this.props.addBook(book, this.state.list)}
      className="pborder"
      >
      <h3>#{book.rank} NYT Bestseller</h3>
      <h3>{ book.title} </h3>
      <h4>By: { book.author}</h4>
      <h5>{book.weeks_on_list} weeks on Bestseller List</h5>
      <h5>Synopsis: {book.description}</h5>
    </li>
  </a>)
  return(
    <div>
      <NavBarcomp />
    <div className="bodymargin">
      {renderBooks}
    </div>
    </div>
  )
}
}
const mapStateToProps = state => {
  return {
    list: state.list,
    books: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: (book, list) => dispatch({ type: 'ADD_BOOK', book, list }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NYTbookList);
