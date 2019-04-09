import React from 'react';
import { Button } from 'react-bootstrap'

const NYTbookCard = (props) =>
  <>
    <li
    key={props.book.rank}
    onClick={() => props.checkForDuplicateBook(props.book)}
    className="pborder"
    >
    <br />
    <h4>#{props.book.rank} NYT Bestseller</h4>
    <h4>{props.book.title} </h4>
    <h6>By: {props.book.author}</h6>
    <h6>{props.book.weeks_on_list} weeks on Bestseller List</h6>
    <p>Synopsis: {props.book.description}</p>
    {props.book.review !== "" ? <Button bsStyle="link"><a href={props.book.review} target="_blank" rel="noopener noreferrer">Link to New York Times Book Review </a></Button> : <Button bsStyle="link"><a href={props.book.amazon_url} a target="_blank" rel="noopener noreferrer">Link to Review </a></Button>}
  </li>
  </>


export default NYTbookCard;
