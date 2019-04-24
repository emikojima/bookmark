import React, { Component } from 'react';
import { connect } from 'react-redux'
import NYTbookCard from '../components/NYTbooks/NYTbookCard'
import { postBook, setGenre, getNytBooks }from '../actions/bookActions';
import { addAlertMessage } from '../actions/alertActions'
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
    !isbns.includes(book.isbns) ? this.props.postBook(book, this.props.user) : this.props.addAlertMessage({text: "This book is already on your list", type: "error"})
  };

  isRgenre = (x) => {
      const genre = x === "books" ? "fiction" : x
      return  genre.charAt(0).toUpperCase() + genre.substr(1).toLowerCase()
    }

  render() {
    const genreName = this.props.rgenre ? this.isRgenre(this.props.rgenre) : this.isRgenre(this.props.genre)
    const bimage = () => {
      if (genreName === "Fiction") {
        return "fmargin"
      } else if (genreName === "Science") {
        return "smargin"
      } else {
        return "nmargin"
      }
    }
    const renderBooks = this.props.nytbooks.map((book, id) =>
      <NYTbookCard key={id} book={book} cFd={this.checkForDuplicateBook} id={id} />
    );

    return(
        <div className={bimage()}>
          <h1> New York Times Bestsellers</h1>
          <h3>{genreName}</h3>
          <br></br>
          <h6>Click on a book card to add it to your reading list</h6>
          <br></br>
          {renderBooks}
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.user.books,
    user: state.user.userId,
    nytbooks: state.user.nytbooks,
    genre: state.user.genre
  };
};


export default connect(mapStateToProps,{postBook, getNytBooks, setGenre, addAlertMessage})(BestSellers);
