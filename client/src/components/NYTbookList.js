import React, { Component } from 'react';
import axios from 'axios';
import './NYTbookList.css';
import NavBarcomp from './NavBarcomp'
import {Well} from 'react-bootstrap'

class NYTbookList extends Component {
  state = {
    books: []
  }

componentDidMount() {
  axios.get('/api/v1/books.json')
  .then(response => {
    console.log(response.data)
    this.setState({
      books: response.data
    })
  })
}

render() {
  console.log("nyt render", this.state.books)
  const renderBooks = this.state.books.map((book, id) =>
  <li className="pborder" key={book.rank}><h3>#{book.rank} NYT Bestseller</h3><h4>{ book.title} </h4><h5>By: { book.author}</h5><h5>{book.weeks_on_list} weeks on Bestseller List</h5><p>Synopsis: {book.description}</p><p></p></li>)
  return(
    <div>
      <NavBarcomp />
    <div className="bodymargin">  
      {renderBooks}
    </div>
    </div>
  )
}
}


export default NYTbookList;
