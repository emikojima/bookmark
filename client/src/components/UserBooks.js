import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserBooks } from '../actions/bookActions';
import { deleteUserBook } from '../actions/bookActions';
import UserBookCard from './UserBookCard';
import { addBookNote } from '../actions/bookActions';
import './UserBooks.css';
import NavBarcomp from './NavBarcomp';

class UserBooks extends Component {
  componentDidMount() {
    this.props.getUserBooks(this.props.user)

  }
  render() {
    const booksList = this.props.books.map(book => {
      return (<UserBookCard
        key={book.id}
        book={book}
        deleteUserBook={this.props.deleteUserBook}
        userId={this.props.user}
        addBookNote={this.props.addBookNote} />)
    });
    return(
    <div className="userBooks">
      <NavBarcomp />
      <h1> MY BOOKLIST</h1>
      <ul>
        { booksList }
      </ul>
    </div>
    )
  }
}
  const mapStateToProps = (state) => {
    return ({
      books: state.books,
      user: state.userId
    })
  }

export default connect(mapStateToProps,{getUserBooks,deleteUserBook,addBookNote})(UserBooks)
