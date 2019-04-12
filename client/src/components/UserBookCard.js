import React, { Component } from 'react';
import './NYTbookList.css';
import BookNotes from './BookNotes';
import BookNote from './BookNote';
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
    const isThereAbookNote = this.props.book.notes ? <BookNote note={this.props.book.notes} /> : null
    const buttonText = !this.props.book.notes ? "Add Book Note" : "Edit Book Note"
    return (

      <li className="pborder">
        <h4>{this.props.book.title}</h4>
        <h5>By: {this.props.book.author}</h5>

        <h6>{this.props.book.description}</h6>
        {isThereAbookNote}
        <Button bsStyle="outline-info" style={show} onClick={() => this.setState({showBookNoteComponent: !this.state.showBookNoteComponent})}>{buttonText}</Button>
        <br></br>
        {showBookNoteForm}

        <Button bsStyle="outline-secondary" onClick={()=>this.props.deleteUserBook(this.props.book)}>DELETE THIS BOOK</Button>
      </li>

    )
  }
}
export default UserBookCard;
