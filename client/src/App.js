import React, { Component } from 'react';
import './App.css';

import LoginSigninForm from './components/LoginSigninForm'
import Main from './container/Main'
import {Grid, Row, Col} from 'react-bootstrap'
import hero from './hero.jpg'
// import { Link } from 'react-router';

class App extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
  }
  render() {
    const logged = !this.state.loggedIn ? <LoginSigninForm /> : < Main />
    const image = <img src={hero} alt="a person sitting on a bed with books and magazines spread over the bed" />
    return (
      <div className="App">

        <Grid>
          <Row >
            <Col xs={4} md={4} lg={4}>
              {image}
            </Col>
            <Col xs={4} md={4} lg={4} >
              {logged}
            </Col>
            <Col xsHidden mdHidden lgHidden/>
          </Row>
        </Grid>;
      </div>
    );
  }
}

export default App;
