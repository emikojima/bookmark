import React, { Component } from "react";
import BookNoteForm from './BookNoteForm';

export default class BookNotes extends Component {
  state = {
    note: "",
  }

  onSubmitNote = event => {
    event.preventDefault()
    const book = this.props.book
    book.notes = this.state.note
    this.setState({note: ""})
    this.props.setShowBookNotesComponent(!this.props.showBookNoteComponent)
    this.props.addBookNote(book)
  }

  handleNoteChange = event => {
    this.setState({note: event.target.value})}

  render() {
    const placeholderText = this.props.book.notes ? this.props.book.notes : "ADD your note for this book here."
    const submitButtonText = this.props.book.notes ? "Edit Note" : "Add Note"
    const display = !this.props.showBookNoteComponent ? {display: 'none'} : {}
    return (
      <BookNoteForm onSubmitNote={this.onSubmitNote} note={this.state.note} handleNoteChange={this.handleNoteChange} submitButtonText={this.submitButtonText}
      book={this.props.book.notes} showBookNoteComponent={this.props.showBookNoteComponent} placeholderText={placeholderText} submitText={submitButtonText} diplay={display}/>
    )
  }
}
