import React, { Component } from 'react';
import UserBooks from '../components/UserBooks/UserBooks';
import './ShowMyBooksButton.css'

class ShowMyBooksButton extends Component {
  state = {
    showMybooks: true,
    buttonText: true
  }

  onShowClick = () => {
    this.setState({
      showMybooks: !this.state.showMybooks,
      buttonText: !this.state.buttonText}
    )}

  render() {
    let buttonText = this.state.buttonText === true ? "△ Hide My Books △ " : " ▽ Show My Books  ▽"

    const button = <h3 className="link" onClick={this.onShowClick}>{buttonText}</h3>
    return(
      <>
      {!this.state.showMybooks ? button : <> {button} <UserBooks /><hr/> {button} </>}
      </>
    )
  }
}
export default ShowMyBooksButton;
