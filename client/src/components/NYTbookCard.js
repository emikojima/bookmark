import React from 'react';

const NYTbookCard = (props) =>
  <>
    <li
    key={props.book.rank}
    className="pborder"
    >
    <h3 onClick={() => props.checkForDuplicateBook(props.book)}>#{props.book.rank}  Bestseller</h3>
    <h4 onClick={() => props.checkForDuplicateBook(props.book)}>{props.book.title} </h4>
    <h6 onClick={() => props.checkForDuplicateBook(props.book)}>By: {props.book.author}</h6>
    {props.book.weeks_on_list > 0 ? <h6 onClick={() => props.checkForDuplicateBook(props.book)}> {props.book.weeks_on_list} week(s) on Bestseller List</h6> : null}
    <p onClick={() => props.checkForDuplicateBook(props.book)}>Synopsis: {props.book.description}</p>
    {props.book.review !== "" ? <a href={props.book.review} target="_blank" rel="noopener noreferrer">Link to New York Times Book Review </a> : <a href={props.book.amazon_url} a target="_blank" rel="noopener noreferrer">Link to Review </a>}
  </li>
  </>


export default NYTbookCard;
