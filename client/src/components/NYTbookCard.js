import React from 'react';

const NYTbookCard = (props) =>
  <>
    <li
    key={props.book.rank}
    onClick={() => props.checkForDuplicateBook(props.book)}
    className="pborder"
    >
    <h5>#{props.book.rank} NYT Bestseller</h5>
    <h5>{props.book.title} </h5>
    <h6>By: {props.book.author}</h6>
    <h6>{props.book.weeks_on_list} weeks on Bestseller List</h6>
    <p>Synopsis: {props.book.description}</p>
    {props.book.review !== "" ? <a href={props.book.review} target="_blank" rel="noopener noreferrer">Link to New York Times Book Review </a> : <a href={props.book.amazon_url} a target="_blank" rel="noopener noreferrer">Link to Review </a>}
    </li>
  </>


export default NYTbookCard;
