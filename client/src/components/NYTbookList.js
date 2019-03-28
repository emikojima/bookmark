import React, { Component } from 'react';
import axios from 'axios';
import './NYTbookList.css';
import NavBarcomp from './NavBarcomp'
import { connect } from 'react-redux'
import {postBook }from '../actions/bookActions'
import UserBooks from '../components/UserBooks'


class NYTbookList extends Component {
  state = {
    list: "To Read",
    books: []
  }

componentDidMount() {
  axios.get('api/v1/books.json')
  .then(response => {
	console.log("axios",response.data);
  this.setState({books: response.data})
})
.catch(error => {
    console.log(error.response)
});
}

render() {
  console.log("userbooks", this.props)
  console.log("nyt render", this.state.books)

  const renderBooks = this.state.books.map((book, id) =>
    <a href="#"><li
      key={book.rank}
      onClick={() => this.props.postBook(book, this.props.user)}
      className="pborder"
      >
      <h3>#{book.rank} NYT Bestseller</h3>
      <h3>{ book.title} </h3>
      <h4>By: { book.author}</h4>
      <h5>{book.weeks_on_list} weeks on Bestseller List</h5>
      <h5>Synopsis: {book.description}</h5>
      <a href={book.review}>Link to review </a>
    </li>
  </a>)
  return(
    <div>
      <NavBarcomp />
      <div className="bodymargin">
        <br></br>
        <h1> NEW YORK TIMES BESTSELLERS </h1>
        {renderBooks}
      </div>
      <UserBooks />
  </div>
  )
}
}
const mapStateToProps = state => {
  return {
    list: state.list,
    books: state.books,
    user: state.userId
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addBook: (book, list, user) => dispatch({ type: 'ADD_BOOK', book, list, user }),
//   }
// }

export default connect(mapStateToProps,{postBook})(NYTbookList);
