import React from 'react';
import './NYTbookList.css';

const NYTbookCard = (props) =>
  <a href="#">
    <li
    key={props.book.rank}
    onClick={() => props.checkForDuplicateBook(props.book)}
    className="pborder"
    >
    <h3>#{props.book.rank} NYT Bestseller</h3>
    <h3>{props.book.title} </h3>
    <h4>By: {props.book.author}</h4>
    <h5>{props.book.weeks_on_list} weeks on Bestseller List</h5>
    <h5>Synopsis: {props.book.description}</h5>
    {props.book.review !== "" ? <a href={props.book.review} a target="_blank" rel="noopener noreferrer">Link to New York Times Book Review </a> : <a href={props.book.amazon_url} a target="_blank" rel="noopener noreferrer">Link to Review </a>}
    </li>
  </a>

export default NYTbookCard;
