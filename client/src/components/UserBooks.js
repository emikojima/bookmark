import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserBooks } from '../actions/bookActions';
import { deleteUserBook } from '../actions/bookActions';
import UserBookCard from './UserBookCard';
import { addBookNote } from '../actions/bookActions';
import './UserBooks.css';
import SearchBar from './SearchBar'

class UserBooks extends Component {
  state = {
    term: ""
  }

  componentDidMount() {
    if(this.props.user !== "" && !this.props.books.length ){
        this.props.getUserBooks(this.props.user)
    }
  }

  //callback to get search term from SearchBar.js
  getsearch = (term ) => {
    this.setState({term: term })
  }

  lower = (book, search) => {
    return book.title.toLowerCase().includes(search.toLowerCase()) || book.description.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
  }

  filterIt = (search) => {
    return (book) => {
    return !book.notes ? this.lower(book, search) : book.notes.toLowerCase().includes(search.toLowerCase()) ||  this.lower(book, search)
  }}

  render() {
    const booksList = this.props.books.filter(this.filterIt(this.state.term)).map(book => {return (<UserBookCard
          key={book.id}
          book={book}
          deleteUserBook={this.props.deleteUserBook}
          userId={this.props.user}
          addBookNote={this.props.addBookNote} />)
        }
    )
    return(
      <div className="userBooks">
        <h1>{this.props.username}'s Books </h1>
        <SearchBar getsearch={this.getsearch} />
        <br></br>
        { booksList }
      </div>
    )
  }
}
  const mapStateToProps = (state) => {
    return ({
      books: state.user.books,
      user: state.user.userId,
      username: state.user.username
    })
  }

export default connect(mapStateToProps,{getUserBooks,deleteUserBook,addBookNote})(UserBooks)
