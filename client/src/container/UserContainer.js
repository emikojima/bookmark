import React, { Component } from "react";
import Login from '../components/UserAuth/Login';
import SignUp from '../components/UserAuth/SignUp';
import {Grid, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import { logInThisUser, showSignup, signUpUser } from '../actions/userActions'
import './UserContainer.css'

class UserContainer extends Component {
  render() {
    const show = !this.props.signUp ? <Login loginUser={this.props.logInThisUser} showSignup={this.props.showSignup} signUp={this.props.signUp} />  : <SignUp signUpUser={this.props.signUpUser} />;
    return (
      <div className="image" >
        <Grid >
          <Row>
            <Col sm={2} md={3} lg={4}>
            </Col>
            <Col sm={8} md={6} lg={4}>
              {show}
            </Col>
            <Col sm={2} md={3} lg={4}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  };
};

const mapStateToProps = state =>{
  return {
    signUp: state.user.signUp,
    books: state.user.books,
    user: state.user.userId
  };
};

export default connect(mapStateToProps, {logInThisUser, signUpUser, showSignup})(UserContainer);
