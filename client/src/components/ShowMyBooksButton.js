import React, { Component } from 'react';
import './NYTbookList.css';
import UserBooks from '../components/UserBooks';
import './ShowMyBooksButton.css'


class ShowMyBooksButton extends Component {
  state = {
    showMybooks: false,
    buttonText: false
  }

  render() {
    let buttonText = this.state.buttonText === true ? "△ Show Less △ " : " ▽ Show My Books  ▽"
    return(
      <>
      <h3 className="link" onClick={() => this.setState({showMybooks: !this.state.showMybooks, buttonText: !this.state.buttonText})}>{buttonText}</h3>
      {this.state.showMybooks ? <UserBooks /> : null}
      </>
    )
}
}
export default ShowMyBooksButton;
