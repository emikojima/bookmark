import React, { Component } from 'react';
import './ShowMyBooksButton.css'


class ShowMyBooksButton extends Component {
  state = {
    showMybooks: false,
    buttonText: false
  }

  onShowClick = () => {
    this.props.toParent(!this.state.showMybooks)
    this.setState({
      showMybooks: !this.state.showMybooks,
      buttonText: !this.state.buttonText}
    )
  }

  render() {
    let buttonText = this.state.buttonText === true ? "△ Hide My Books △ " : " ▽ Show My Books  ▽"
    const button = <h3 className="link" onClick={this.onShowClick}>{buttonText}</h3>
      return(
          <>
          { button }
          </>
      )
    }
  }
export default ShowMyBooksButton;
