import React, { Component } from 'react';
import './NYTbookList.css';
import BookNotes from './BookNotes';

class UserBookCard extends Component {
  state = {showBookNoteComponent: false}

  setShowBookNotesComponent = (getback) => {
    this.setState({showBookNoteComponent: getback})}

  render() {
    const showBookNoteForm = this.state.showBookNoteComponent ? <BookNotes addBookNote={this.props.addBookNote} book={this.props.book} setShowBookNotesComponent={ this.setShowBookNotesComponent} showBookNoteComponent={this.state.showBookNoteComponent}/> : null
    const show = this.state.showBookNoteComponent ? {display: 'none'} : {}
    return (
    <li className="pborder">
      <h4>{this.props.book.title}</h4>
      <h5>{this.props.book.description}</h5>
      <h5>{this.props.book.author}</h5>
      <h5>NOTE: {this.props.book.notes}</h5>
      <button style={show} onClick={() => this.setState({showBookNoteComponent: !this.state.showBookNoteComponent})}>Add or Edit a Book Note</button>
      {showBookNoteForm}
      <button onClick={()=>this.props.deleteUserBook(this.props.book)}>DELETE THIS BOOK</button>
    </li>
    )
  }
}
export default UserBookCard;
