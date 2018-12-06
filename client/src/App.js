import React, { Component } from 'react';
import './App.css';

import LoginSigninForm from './components/LoginSigninForm';
import NYTbookList from './components/NYTbookList';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

class App extends Component {

  render() {
    const logged = !this.props.loggedIn ? <LoginSigninForm /> : < NYTbookList />
    return (
      <div className="App">
      {logged}
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
   loggedIn: false
 }}
export default connect(mapStateToProps)(App);
