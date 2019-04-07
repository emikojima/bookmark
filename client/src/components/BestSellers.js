import React, { Component } from 'react';
import NavBarcomp from './NavBarcomp'
import { connect } from 'react-redux'
import NYTbookCard from './NYTbookCard'

class Bestsellers extends Component {

  checkForDuplicateBook = (book) => {
    const booktitlearray = [];

    this.props.books.map(book => booktitlearray.push(book.title));
    !booktitlearray.includes(book.title) ? this.props.postBook(book, this.props.user) : window.confirm("This book is already on your list")
  };

  render() {
    const renderBooks = this.props.nytbooks.map((book, id) =>
      <NYTbookCard key={id} book={book} checkForDuplicateBook={this.checkForDuplicateBook} id={id} />
    );
    return(
        <div className="bodymargin">
          <NavBarcomp />
        { renderBooks }

        </div>
    )
  }
}
const mapStateToProps = state => {
  return{
    nytbooks: state.nytbooks
  }
}

export default connect(mapStateToProps)(Bestsellers);
