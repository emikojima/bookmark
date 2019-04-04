import React, { Component } from 'react';
import './NYTbookList.css';
import NavBarcomp from './NavBarcomp';
import { connect } from 'react-redux';
import { postBook }from '../actions/bookActions';
import UserBooks from '../components/UserBooks';
import { getNytBooks } from '../actions/bookActions';
import NYTbookCard from './NYTbookCard';
import { Button } from 'react-bootstrap';


class NYTbookList extends Component {
  state = {
    showMybooks: false,
    buttonText: false
  }

  componentDidMount() {
    this.props.getNytBooks()
  };

  // checking to see if the book is already in user's list, if not adds book to database & redux store
  checkForDuplicateBook = (book) => {
    const booktitlearray = [];

    this.props.books.map(book => booktitlearray.push(book.title));
    !booktitlearray.includes(book.title) ? this.props.postBook(book, this.props.user) : window.confirm("This book is already on your list")
  };

  render() {
    let buttonText = this.state.buttonText === true ? "Show Less" : "Show My Books"
    const style = {color: "white" ,textShadow: '1px 1px gray'}
    const renderBooks = this.props.nytbooks.map((book, id) =>
      <NYTbookCard book={book} checkForDuplicateBook={this.checkForDuplicateBook} id={id} />);
    return(
      <>
        <NavBarcomp />
        <div className="bodymargin">
          <br></br>
          <>
          <h1> MY BOOKLIST</h1>
          <Button
          bsStyle="light"
          onClick={() => this.setState({showMybooks: !this.state.showMybooks, buttonText: !this.state.buttonText})
          }>{buttonText}</Button>
          {this.state.showMybooks ? <UserBooks /> : null}
          </>
          <h1> NEW YORK TIMES BESTSELLERS </h1>
          <h4 style={style}>Click on a book card to add it to your reading list!</h4>
          <div id="responsive">
          <ul>
          {renderBooks}
          </ul>
          </div>
        </div>
      </>
    );
  };
};

  const mapStateToProps = state => {
    return {
      books: state.books,
      user: state.userId,
      nytbooks: state.nytbooks,
    };
  };

export default connect(mapStateToProps,{postBook, getNytBooks})(NYTbookList);
