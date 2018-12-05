import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Login extends Component {

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

render() {
  return (
   <div className="whiteText" >
     <h3>Sign Up</h3>
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
         Sign Up
       </Button>
     </form>
   </div>
   )
   }
 }
