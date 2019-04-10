import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserBooks } from '../actions/bookActions';
import { deleteUserBook } from '../actions/bookActions';
import UserBookCard from './UserBookCard';
import { addBookNote } from '../actions/bookActions';
import './UserBooks.css';
import { withRouter } from 'react-router';


class UserBooks extends Component {
  componentDidMount() {
    if(this.props.user !== "" && !this.props.books.length ) {
        this.props.getUserBooks(this.props.user)
    }

    console.log("route props",this.props)
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
    <div className="bodymargin">

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

export default withRouter (connect(mapStateToProps,{getUserBooks,deleteUserBook,addBookNote})(UserBooks))
