import React, { Component } from 'react';
import './App.css';
import UserContainer from './container/UserContainer';
import NYTbookList from './components/NYTbookList';
import { connect } from 'react-redux';
import { BrowserRouter} from 'react-router-dom'
// import { Link } from 'react-router';

class App extends Component {

  render() {
    const logged = !this.props.loggedIn ? <UserContainer signUp={this.props.signUp}/> : < NYTbookList />
    return (
      <BrowserRouter>
        <div className="App" id="responsive">
          {logged}
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state =>{
  return {
   loggedIn: state.loggedIn,
   signUp: state.signUp
 }}
export default connect(mapStateToProps)(App);
