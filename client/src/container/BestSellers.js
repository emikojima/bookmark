import React, { Component } from 'react';
import NavBarcomp from '../components/NavBarcomp'
import { connect } from 'react-redux'
import NYTbookCard from '../components/NYTbookCard'
import { getNytBooks } from '../actions/bookActions';
import { postBook }from '../actions/bookActions';
import './BestSellers.css'

class BestSellers extends Component {
  componentDidMount() {
    this.props.getNytBooks()
  }
  // checking to see if the book is already in user's list, if not adds book to database & redux store
  checkForDuplicateBook = (book) => {
    const booktitlearray = [];
    this.props.books.map(book => booktitlearray.push(book.title));
    !booktitlearray.includes(book.title) ? this.props.postBook(book, this.props.user) : window.confirm("This book is already on your list")
  };

  render() {
    const renderBooks = this.props.nytbooks.map((book, id) =>
      <NYTbookCard key={id} book={book} checkForDuplicateBook={this.checkForDuplicateBook} id={id} />
    );
    const style = {color: "white" ,textShadow: '1px 1px gray', fontFamily: "Palatino Linotype"}

    return(
        <div className="smallmargin">
          <NavBarcomp />
          <h1> NEW YORK TIMES BESTSELLERS </h1>
          <h4 style={style}>Click on a book card to add it to your reading list!</h4>
          <ul>
          {renderBooks}
          </ul>
        </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    books: state.books,
    user: state.userId,
    nytbooks: state.nytbooks,
  };
};


export default connect(mapStateToProps,{postBook, getNytBooks})(BestSellers);
