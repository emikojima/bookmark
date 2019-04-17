import React, { Component } from 'react';
import './NYTbookList.css';
import UserBooks from '../components/UserBooks';
import { Button } from 'react-bootstrap';


class ShowMyBooksButton extends Component {
  state = {
    showMybooks: false,
    buttonText: false
  }

  render() {
    let buttonText = this.state.buttonText === true ? "△ Show Less △ " : " ▽ Show My Books  ▽"
    return(

      <div className="bodymargin">

      <Button
      size="sm"
      bsStyle="link"
      onClick={() => this.setState({showMybooks: !this.state.showMybooks, buttonText: !this.state.buttonText})
      }>{buttonText}</Button>
      {this.state.showMybooks ? <UserBooks /> : null}
    </div>
    )
}
}
export default ShowMyBooksButton;
