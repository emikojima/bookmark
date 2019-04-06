import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    signUp: false
  }

  validateForm() {
    return this.state.username.length > 2 && this.state.password.length > 2;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(user)
  }

  handleSignUp = event => {
    event.preventDefault();
    this.props.showSignup(this.props.signUp)
  }

  render() {
    return (
      <div className="whiteText">
        <h3>LOGIN</h3>
          <form inline="true" onSubmit={this.handleSubmit}>
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
            >Login</Button>
          </form>
            <h4>OR</h4>
            <Button
              onClick={(event) => {this.handleSignUp(event)}}
              bsStyle="info"
              block
              bsSize="large"
              type="submit"
            >Sign Up</Button>
      </div>
    )
  }
}
