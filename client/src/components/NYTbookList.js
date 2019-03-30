import React, { Component } from 'react';
import './NYTbookList.css';
import NavBarcomp from './NavBarcomp'
import { connect } from 'react-redux'
import {postBook }from '../actions/bookActions'
import UserBooks from '../components/UserBooks';
import {getNytBooks} from '../actions/bookActions'


class NYTbookList extends Component {


componentDidMount() {
  this.props.getNytBooks()
}

checkForDuplicateBook = (book) => {
  const booktitlearray = [];
  const booktitles = this.props.books.map(book => booktitlearray.push(book.title));

   !booktitlearray.includes(book.title) ? this.props.postBook(book, this.props.user) : console.log("book already exists")}


render() {
  console.log("userbooks", this.props)
  console.log("nyt render", this.props.nytbooks)

  const renderBooks = this.props.nytbooks.map((book, id) =>
    <a href="#"><li
      key={book.rank}
      onClick={() => this.checkForDuplicateBook(book)}
      className="pborder"
      >
      <h3>#{book.rank} NYT Bestseller</h3>
      <h3>{ book.title} </h3>
      <h4>By: { book.author}</h4>
      <h5>{book.weeks_on_list} weeks on Bestseller List</h5>
      <h5>Synopsis: {book.description}</h5>
      // <a href={book.review}>Link to review </a>
    </li>
  </a>)
  return(
    <>
      <NavBarcomp />
      <div className="bodymargin">
        <br></br>
        <h1> NEW YORK TIMES BESTSELLERS </h1>
        {renderBooks}
    <>
          <h1> MY BOOKLIST</h1>
          <UserBooks />
        </>
      </div>
    </>
  )
}
}
const mapStateToProps = state => {
  return {
    list: state.list,
    books: state.books,
    user: state.userId,
    nytbooks: state.nytbooks,
  }
}


export default connect(mapStateToProps,{postBook, getNytBooks})(NYTbookList);
