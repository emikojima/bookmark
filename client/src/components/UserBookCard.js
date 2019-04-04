import React, { Component } from 'react';
import './NYTbookList.css';
import BookNotes from './BookNotes';
import Note from './Note';
import { Button } from 'react-bootstrap';

class UserBookCard extends Component {
  state = {
    showBookNoteComponent: false
  }
  //callback function to get showBookNoteComponent prop back from child component
  setShowBookNotesComponent = (getback) => {
    this.setState({showBookNoteComponent: getback})}

  render() {
    const showBookNoteForm = this.state.showBookNoteComponent ? <BookNotes addBookNote={this.props.addBookNote} book={this.props.book} setShowBookNotesComponent={ this.setShowBookNotesComponent} showBookNoteComponent={this.state.showBookNoteComponent}/> : null
    const show = this.state.showBookNoteComponent ? {display: 'none'} : {}
    const isThereAbookNote = this.props.book.notes ? <Note note={this.props.book.notes} /> : null
    const buttonText = !this.props.book.notes ? "Add Book Note" : "Edit Book Note"
    return (
      <li className="pborder">
        <h3>{this.props.book.title}</h3>
        <br/>
        <h5>{this.props.book.description}</h5>
        <h5>{this.props.book.author}</h5>
        {isThereAbookNote}
        <Button bsStyle="outline-info" style={show} onClick={() => this.setState({showBookNoteComponent: !this.state.showBookNoteComponent})}>{buttonText}</Button>
        <br></br>
        {showBookNoteForm}
        <Button bsStyle="outline-danger" onClick={()=>this.props.deleteUserBook(this.props.book)}>DELETE THIS BOOK</Button>
      </li>
    )
  }
}
export default UserBookCard;
