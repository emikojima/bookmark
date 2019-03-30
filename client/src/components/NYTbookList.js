import React, { Component } from 'react';
import './NYTbookList.css';
import NavBarcomp from './NavBarcomp'
import { connect } from 'react-redux'
import {postBook }from '../actions/bookActions'
import UserBooks from '../components/UserBooks';
import {getNytBooks} from '../actions/bookActions'
import NYTbookCard from './NYTbookCard'

class NYTbookList extends Component {

componentDidMount() {
  this.props.getNytBooks()
}

// checking to see if the book is already in user's list, if not adds book to database & redux store
checkForDuplicateBook = (book) => {
  const booktitlearray = [];
  this.props.books.map(book => booktitlearray.push(book.title));
  !booktitlearray.includes(book.title) ? this.props.postBook(book, this.props.user) : console.log("book already exists")};

render() {
  console.log("userbooks", this.props)
  console.log("nyt render", this.props.nytbooks)

  const renderBooks = this.props.nytbooks.map((book, id) =>
    <NYTbookCard book={book} checkForDuplicateBook={this.checkForDuplicateBook} id={id} />)

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
}}

const mapStateToProps = state => {
  return {
    list: state.list,
    books: state.books,
    user: state.userId,
    nytbooks: state.nytbooks,
  }
}


export default connect(mapStateToProps,{postBook, getNytBooks})(NYTbookList);
