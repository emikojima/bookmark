import React, { Component } from "react";
import { Button, FormGroup, Col, FormControl, ControlLabel } from "react-bootstrap";


export default class LoginSigninForm extends Component {

    state = {
      username: "",
      password: ""
    }


  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
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
            bsStyle="info"
            block
            bsSize="large"
            type="submit"
          >
          Sign Up
          </Button>
      </div>
    );
  }
}
