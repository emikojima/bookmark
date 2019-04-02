import React, { Component } from "react";

export default class BookNotes extends Component {
  state = {
    note: ""
  }

  onSubmitNote = (book) => {
    book.notes = this.state.note
    this.props.addBookNote(book)

  }

  render() {
    return (
      <form onSubmit={()=>this.onSubmitNote(this.props.book)}>
      <input type="text" placeholder="Add your note for this book here" onChange={(event) => this.setState({note: event.target.value})}></input>
      <button type="submit">Add Note</button>
    </form>
    )
  }
}
