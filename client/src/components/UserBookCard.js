import React from 'react';
import './NYTbookList.css';
import BookNotes from './BookNotes';

const UserBookCard = (props) =>
    <li className="pborder">
      <h4>{props.book.title}</h4>
      <h5>{props.book.description}</h5>
      <h5>{props.book.author}</h5>
      <h5>NOTE: {props.book.notes}</h5>
      <BookNotes addBookNote={props.addBookNote} book={props.book}/>

      <button onClick={()=>props.deleteUserBook(props.book)}>DELETE THIS BOOK</button>
    </li>

export default UserBookCard;
