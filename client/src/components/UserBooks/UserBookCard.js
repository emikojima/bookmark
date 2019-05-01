import React, { Component } from 'react';
import '../NYTbooks/NYTbookList.css';
import BookNotes from '../BookNotes/BookNotes';
import BookNote from '../BookNotes/BookNote';
import { Button } from 'react-bootstrap';

class UserBookCard extends Component {
  state = {
    showBookNoteComponent: false
  }
  //callback function to get showBookNoteComponent prop back from child component
  setShowBookNotesComponent = (getback) => {
    this.setState({showBookNoteComponent: getback})}

  render() {
    const { book } = this.props
    const showBookNoteForm = this.state.showBookNoteComponent ? <BookNotes addBookNote={this.props.addBookNote} book={book} setShowBookNotesComponent={ this.setShowBookNotesComponent} showBookNoteComponent={this.state.showBookNoteComponent}/> : null
    const show = this.state.showBookNoteComponent ? {display: 'none'} : {}
    const bookNote = book.notes ? <BookNote note={book.notes} /> : null
    const buttonText = !book.notes ? "Add Book Note" : "Edit Book Note"
    return (
      <li className="pborder">
        <h4>{book.title}</h4>
        <h6>By: {book.author}</h6>
        <p>{book.description}</p>
        {bookNote}
        <Button bsStyle="success" style={show} onClick={() => this.setState({showBookNoteComponent: !this.state.showBookNoteComponent})}>{buttonText}</Button>
        {showBookNoteForm}
        <Button bsStyle="link" onClick={()=>this.props.deleteUserBook(book)}>DELETE THIS BOOK</Button>
      </li>

    )
  }
}
export default UserBookCard;
