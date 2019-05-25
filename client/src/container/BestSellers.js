import React, { Component } from 'react';
import { connect } from 'react-redux'
import NYTbookCard from '../components/NYTbooks/NYTbookCard'
import { postBook, setGenre, getNytBooks }from '../actions/bookActions';
import { addAlertMessage } from '../actions/alertActions'
import './BestSellers.css'

class BestSellers extends Component {

  componentDidMount() {
      if(!!this.props.togglegenre) {
        this.props.getNytBooks(this.props.togglegenre)
      } else {
        this.props.getNytBooks(this.props.genre)
      }
    }

  checkForDuplicateBook = (book) => {
    this.props.books.find(b => b.title === book.title) ? this.props.addAlertMessage({text: "This book is already on your list", type: "error"}) : this.props.postBook(book, this.props.user)

  };

  isRgenre = (x) => {
      return x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()
    }

  render() {
    const {genre, togglegenre, fiction, listdate} = this.props

    const genreName = togglegenre ? this.isRgenre(togglegenre) : this.isRgenre(genre)
    const bimage = () => {
      return `${genreName.charAt(0).toLowerCase()}margin`
    }
    const renderBooks =
      fiction.map((book, id) =>
      <NYTbookCard key={id} book={book} cFd={this.checkForDuplicateBook} id={id} />
    )
    const date = listdate.split("-")
    const formatDate = date[1]+"."+date[2]+"."+date[0];

    return(
        <div className={bimage()}>
          <div className="card">
          <h1> New York Times Bestsellers</h1>
          <h3>{genreName}</h3>
          <h5>List Published: {formatDate}</h5>

          <h6>Click on a book card to add it to your reading list</h6>
          </div>
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
    fiction: state.user.fiction,
    genre: state.user.genre,
    listdate: state.user.listDate
  };
};

export default connect(mapStateToProps,{postBook, getNytBooks, setGenre, addAlertMessage})(BestSellers);
