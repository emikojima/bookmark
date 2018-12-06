import React, { Component } from 'react';
import axios from 'axios';

class NYTbookList extends Component {
  state = {
    books: []
  }


componentDidMount() {
  axios.get('api/v1/books.json')
  .then(response => {
    console.log(response)
    this.setState({
      books: response.data
    })
  })
}

render() {
  console.log("nyt render", this.state.books)
  return(
    <div>

    </div>
  )
}
}


export default NYTbookList;
