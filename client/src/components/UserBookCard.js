import React, { Component } from 'react';

class UserBookCard extends Component {

  render() {
    const {title, author, description, id, userId} = this.props.book
    console.log("UBC",this.props)
    return(
      <div>
      <li>
        <h1>BOOKS I WANT TO READ</h1>
          <h4>{title}</h4>
          <h5>{description}</h5>
          <h5>{author}</h5>
      </li>
    </div>
    )}
}

export default UserBookCard;
