import React, { Component } from "react";
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import {Grid, Row, Col} from 'react-bootstrap'
import hero from '../hero.jpg';
import { connect } from 'react-redux';
import { logInThisUser, showSignup, signUpUser } from '../actions/userActions'

class UserContainer extends Component {
  render() {
    const show = !this.props.signUp ? < Login loginUser={this.props.logInThisUser} showSignup={this.props.showSignup} signUp={this.props.signUp} />  : < SignUp signUpUser={this.props.signUpUser} />;
  const image = <img src={hero} alt="a person sitting on a bed with books and magazines spread over the bed" />;
    return (
      <div className="backgroundcolor">
        <Grid>
          <Row >

            <Col xs={4} md={4} lg={4}>
              <div className="imageMargin">
              {image}

            </div>
            </Col>

            <Col xs={4} md={4} lg={4} >
              <div className="textMargin"><h1>BOOKMARK</h1></div>

              {show}
            </Col>
            <Col xsHidden mdHidden lgHidden/>
          </Row>
        </Grid>
      </div>
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

export default connect(mapStateToProps, {logInThisUser, signUpUser, showSignup})(UserContainer);
