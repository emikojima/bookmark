import React, { Component } from "react";
import Login from './Login';
import SignUp from './SignUp';


export default class LoginSigninForm extends Component {

    state = {
      signUp: false
    }

    myCallback = (dataFromChild) => {
      this.setState({signUp: dataFromChild})
    }
  render() {
    const show = !this.state.signUp ? < SignUp signUpState={this.state.signUp} callbackFromParent={this.myCallback} /> : < Login  />
    return (
    <div>{show}</div>
    );
  }
}
