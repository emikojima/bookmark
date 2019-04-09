import React, { Component } from 'react';
import './App.css';
import UserContainer from './container/UserContainer';
import NYTbookList from './components/NYTbookList';
import { connect } from 'react-redux';
import NavBarcomp from './components/NavBarcomp'

class App extends Component {
  render() {
    const logged = !!sessionStorage['user'] ? <NYTbookList /> : <UserContainer signUp={this.props.signUp}/>
    const nav = !!sessionStorage['user'] ? <NavBarcomp /> : "HELLO!"

    return (
      <div className="App">
        {nav}
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
