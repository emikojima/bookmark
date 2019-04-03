import React, { Component } from "react";

export default class BookNotes extends Component {
  state = {
    note: ""
  }

  onSubmitNote = event => {
    event.preventDefault()
    const book = this.props.book
    book.notes = this.state.note
    this.setState({note: ""})
    this.props.addBookNote(book)

  }

  handleNoteChange = event => {
    this.setState({note: event.target.value})}

  render() {

    return (
      <form  inline onSubmit={this.onSubmitNote}>
      <input type="text" placeholder="Add your note for this book here" value={this.state.note} onChange={this.handleNoteChange}></input>
      <button type="submit">Add Note</button>
    </form>
    )
  }
}
