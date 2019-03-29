import React, { Component } from 'react';
import './NYTbookList.css';

class UserBookCard extends Component {

  render() {
    // const {book, deleteUserBook} = this.props
    console.log("UBC",this.props)
    return(
      <>
      <li className="pborder">
          <h4>{this.props.book.title}</h4>
          <h5>{this.props.book.description}</h5>
          <h5>{this.props.book.author}</h5>
          <button onClick={()=>this.props.deleteUserBook(this.props.book)}>DELETE THIS BOOK</button>
      </li>
      </>
    )}
}

export default UserBookCard;
