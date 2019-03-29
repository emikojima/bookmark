import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserBooks } from '../actions/bookActions';
import { deleteUserBook } from '../actions/bookActions';
import UserBookCard from './UserBookCard';

class UserBooks extends Component {
  componentWillMount() {
    console.log("USERBOOKS",this.props.user, this.props)
    this.props.getUserBooks(this.props.user)

  }
  render() {
    const booksList = this.props.books.map(book => {
      return (
        <UserBookCard
          key={book.id}
          book={book}
          deleteUserBook={this.props.deleteUserBook}
          userId={this.props.user} />)})

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
export default connect(mapStateToProps,{getUserBooks,deleteUserBook})(UserBooks)
