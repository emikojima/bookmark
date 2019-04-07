import React, { Component } from 'react';
import './App.css';
import UserContainer from './container/UserContainer';
import NYTbookList from './components/NYTbookList';
import { connect } from 'react-redux';
import NavBarcomp from './components/NavBarcomp'

class App extends Component {
  render() {
    const logged = this.props.loggedIn ? <NYTbookList /> : <UserContainer signUp={this.props.signUp}/>

    return (
      <div className="App">
        {this.props.loggedIn ? <NavBarcomp /> : "HELLO!"}
        {logged}
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
   signUp: state.signUp,
   loggedIn: state.loggedIn
 }}
export default connect(mapStateToProps)(App);
