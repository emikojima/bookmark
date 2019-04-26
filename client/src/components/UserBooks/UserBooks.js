import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserBookCard from './UserBookCard';
import { addBookNote, getUserBooks, deleteUserBook } from '../../actions/bookActions';
import { logInForRefresh } from '../../actions/userActions'
import './UserBooks.css';
import SearchBar from '../UI/SearchBar'


class UserBooks extends Component {
  state = {
    term: "",
    sort: false
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

  onAlph = () => {
    this.setState({sort: !this.state.sort})
  }

  render() {
    /*const here = this.props.books.slice().sort(???).map(book => {return (<UserBookCard
          key={book.id}
          book={book}
          deleteUserBook={this.props.deleteUserBook}
          userId={this.props.user}
          addBookNote={this.props.addBookNote} />)
        })*/
    const booksList = this.props.books.length > 0 ?  this.props.books.filter(this.filterIt(this.state.term)).map(book => {return (<UserBookCard
          key={book.id}
          book={book}
          deleteUserBook={this.props.deleteUserBook}
          userId={this.props.user}
          addBookNote={this.props.addBookNote} />)
        }
    ) : <h5 className="white">You have no books saved to your list! Click on any book card to save the book.</h5>
  /* const result = !!this.state.sort ? here : booksList

      {this.props.books.length > 0 ? result : <h5 className="white">You have no books saved to your list! Click on any book card to save the book.</h5>

       <button onClick={this.onAlph}></button>*/
    return(
      <div className="userBooks" style={this.props.display}>

        <h1>{this.props.username}'s Books</h1>
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
export default connect(mapStateToProps,{getUserBooks,deleteUserBook,addBookNote, logInForRefresh})(UserBooks)
