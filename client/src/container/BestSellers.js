import React, { Component } from 'react';
import { connect } from 'react-redux'
import NYTbookCard from '../components/NYTbookCard'
import { getNytBooks } from '../actions/bookActions';
import { postBook }from '../actions/bookActions';
import { setGenre } from '../actions/bookActions'
import './BestSellers.css'

class BestSellers extends Component {

  componentDidMount() {
      if(this.props.rgenre){
        this.props.getNytBooks(this.props.rgenre)
      } else {
        this.props.getNytBooks(this.props.genre)
      }
    }

  checkForDuplicateBook = (book) => {
    const isbns = [];
    this.props.books.map(b => isbns.push(b.isbns));
    !isbns.includes(book.isbns) ? this.props.postBook(book, this.props.user) : window.confirm("This book is already on your list")
  };

  isRgenre = (x) => {
      const genre = x === "books" ? "fiction" : x
      return  genre.charAt(0).toUpperCase() + genre.substr(1).toLowerCase()
    }


  render() {
    const genreName = this.props.rgenre ? this.isRgenre(this.props.rgenre) : this.isRgenre(this.props.genre)
    const bcolor = () => {
      if (genreName === "Fiction") {
        return "fmargin"
      } else if (genreName === "Science") {
        return "smargin"
      } else {
        return "nmargin"
      }
    }
    const renderBooks = this.props.nytbooks.map((book, id) =>
      <NYTbookCard key={id} book={book} checkForDuplicateBook={this.checkForDuplicateBook} id={id} />
    );

    return(
        <div className={bcolor()}>
          <h1> New York Times Bestsellers</h1>
          <h3>{genreName}</h3>
          <h6>Click on a book card to add it to your reading list</h6>
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
    genre: state.genre
  };
};


export default connect(mapStateToProps,{postBook, getNytBooks, setGenre})(BestSellers);
