import React, { Component } from 'react';
import './App.css';
import UserContainer from './container/UserContainer';
import NYTbookList from './components/NYTbookList';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

class App extends Component {

  render() {
    const logged = !this.props.loggedIn ? <UserContainer signUp={this.props.signUp}/> : < NYTbookList />
    return (
      <div className="App">
      {logged}
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
   loggedIn: state.loggedIn,
   signUp: state.signUp
 }}
export default connect(mapStateToProps)(App);
