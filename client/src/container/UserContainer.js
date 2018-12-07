import React, { Component } from "react";
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import {Grid, Row, Col} from 'react-bootstrap'
import hero from '../hero.jpg'
import { connect } from 'react-redux'


class UserContainer extends Component {

  render() {
    const show = !this.props.signUp ? < Login loginUser={this.props.loginUser} showSignup={this.props.showSignup} signUp={this.props.signUp} />  : < SignUp signupUser={this.props.signupUser} />
    const image = <img src={hero} alt="a person sitting on a bed with books and magazines spread over the bed" />
    return (
    <div>
      <Grid>
        <Row >
          <Col xs={4} md={4} lg={4}>
            {image}
          </Col>
          <Col xs={4} md={4} lg={4} >
            {show}
          </Col>
          <Col xsHidden mdHidden lgHidden/>
        </Row>
      </Grid>;
    </div>
    );
  }
}

  const mapStateToProps = state =>{
    return {
      signUp: state.signUp
    }
  }
 const mapDispatchToProps = dispatch =>{
   return {
     signupUser: user => dispatch({ type: 'SIGNUP_USER', user }),
     loginUser: user => dispatch({ type: 'LOGIN_USER', user }),
     showSignup: user => dispatch({ type: 'SHOW_SIGN_UP', user})
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
