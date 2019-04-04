import React, { Component } from "react";
import { Button } from 'react-bootstrap';

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
      <form onSubmit={this.onSubmitNote} style={display}>
      <textarea type="text" placeholder={placeholderText} value={this.state.note} onChange={this.handleNoteChange}></textarea>
      <br/>
      <Button bsStyle="secondary" type="submit">{submitButtonText}</Button>
    </form>
    )
  }
}
