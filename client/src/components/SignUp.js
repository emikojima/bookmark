import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Login from './Login'
export default class SignUp extends Component {
  state = {
    username: "",
    password: "",
    signUp: this.props.signUpState
  }

  validateForm() {
    return this.state.username.length > 2 && this.state.password.length > 5;
  }

  toParent = () => {
    this.props.callbackFromParent(this.state.signUp)
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({username: "", password: ""})
  }

  handleSignUp = event => {
    event.preventDefault();
    this.setState({signUp: !this.props.signUpState})
    this.props.callbackFromParent(this.state.signUp)
  }


  render() {
    return (
<div className="whiteText" >
  <h3>LOGIN</h3>
  <form inline onSubmit={this.handleSubmit}>
    <FormGroup controlId="username">

      <ControlLabel>Username</ControlLabel>

      <FormControl
        autoFocus
        placeholder="Username"
        type="text"
        value={this.state.username}
        onChange={this.handleChange}
      />

    </FormGroup>

    <FormGroup controlId="password" bsSize="large">
      <ControlLabel>Password</ControlLabel>
      <FormControl
        value={this.state.password}
        onChange={this.handleChange}
        placeholder="Password"
        type="password"
      />
    </FormGroup>
    <Button
      bsStyle="info"
      block
      bsSize="large"
      disabled={!this.validateForm()}
      type="submit"
    >
      Login
    </Button>
  </form>
    <h4>OR</h4>
    <Button
      onClick={this.handleSignUp}
      bsStyle="info"
      block
      bsSize="large"
      type="submit"
    >
    Sign Up
    </Button>

</div> )
}
}
