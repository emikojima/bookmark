import React, { Component } from 'react';
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
    const isbns = [];
    this.props.books.map(b => isbns.push(b.isbns));
    !isbns.includes(book.isbns) ? this.props.postBook(book, this.props.user) : window.confirm("This book is already on your list")
  };

  render() {
    const renderBooks = this.props.nytbooks.map((book, id) =>
      <NYTbookCard key={id} book={book} checkForDuplicateBook={this.checkForDuplicateBook} id={id} />
    );

    return(
        <div className="smallmargin">
          <h1> New York Times Bestsellers </h1>
          <h5>Click on a book card to add it to your reading list</h5>

          {renderBooks}

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
