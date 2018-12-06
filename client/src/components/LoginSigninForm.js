import React, { Component } from "react";
import Login from './Login';
import SignUp from './SignUp';
import {Grid, Row, Col} from 'react-bootstrap'
import hero from '../hero.jpg'


export default class LoginSigninForm extends Component {

    state = {
      signUp: false
    }

    myCallback = (dataFromChild) => {
      this.setState({signUp: dataFromChild})
    }
  render() {
    const show = !this.state.signUp ? < Login signUpState={this.state.signUp} callbackFromParent={this.myCallback}/> : < SignUp  />
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
