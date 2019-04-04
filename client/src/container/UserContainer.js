import React, { Component } from "react";
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import {Grid, Row, Col} from 'react-bootstrap'
import hero from '../hero.jpg';
import { connect } from 'react-redux';
import { logInOrsignUpUser, showSignup } from '../actions/userActions'

class UserContainer extends Component {
  render() {
    const show = !this.props.signUp ? < Login loginUser={this.props.logInOrsignUpUser} showSignup={this.props.showSignup} signUp={this.props.signUp} />  : < SignUp signUpUser={this.props.logInOrsignUpUser} />;
    const image = <img src={hero} alt="a person sitting on a bed with books and magazines spread over the bed" />;
    return (
      <>
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
        </Grid>
      </>
    );
  };
};

const mapStateToProps = state =>{
  return {
    signUp: state.signUp,
    books: state.books,
    user: state.userId
  };
};

export default connect(mapStateToProps, {logInOrsignUpUser, showSignup})(UserContainer);
