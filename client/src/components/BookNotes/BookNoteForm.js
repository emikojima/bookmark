import React from 'react';
import { Button } from 'react-bootstrap';

const BookNoteForm = (props) => {
  return (
    <form onSubmit={props.onSubmitNote} style={props.display}>
      <textarea type="text" placeholder={props.placeholderText} value={props.note} onChange={props.handleNoteChange}></textarea>
      <br/>
      <Button bsStyle="secondary" type="submit">{props.submitText}</Button>
    </form>
  )
}

export default BookNoteForm;
