import React, { Component } from 'react';
import UserBooks from '../components/UserBooks';
import './ShowMyBooksButton.css'

class ShowMyBooksButton extends Component {
  state = {
    showMybooks: false,
    buttonText: false
  }

  onShowClick = () => {
    this.setState({
      showMybooks: !this.state.showMybooks,
      buttonText: !this.state.buttonText}
    )}


  render() {
    let buttonText = this.state.buttonText === true ? "△ Hide My Books △ " : " ▽ Show My Books  ▽"
    
    return(
      <>
      {!this.state.showMybooks ? <h3 className="link" onClick={this.onShowClick}>{buttonText}</h3> :<> <h3 className="link" onClick={this.onShowClick}>{buttonText}</h3><UserBooks /><hr/><h3 className="link" onClick={this.onShowClick}>{buttonText}</h3></>}
      </>
    )
  }
}
export default ShowMyBooksButton;
