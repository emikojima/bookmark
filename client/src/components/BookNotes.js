import React, { Component } from "react";

export default class BookNotes extends Component {
  state = {
    note: ""
  }

  render() {
    return (
      <div>
      <input type="text" placeholder="Add your note for this book here"></input>
    </div>
    )
  }
}
