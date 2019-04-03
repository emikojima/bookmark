import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserBooks } from '../actions/bookActions';
import { deleteUserBook } from '../actions/bookActions';
import UserBookCard from './UserBookCard';
import { addBookNote } from '../actions/bookActions';

class UserBooks extends Component {
  componentDidMount() {
    console.log("USERBOOKS",this.props.user, this.props)
    this.props.getUserBooks(this.props.user)

  }
  render() {
    console.log("book note added", this.props)
    const booksList = this.props.books.map(book => {
      return (
        <UserBookCard
          key={book.id}
          book={book}
          deleteUserBook={this.props.deleteUserBook}
          userId={this.props.user}
          addBookNote={this.props.addBookNote} />)})

    return(
      <ul className="UserBooks">
        { booksList }
      </ul>
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
