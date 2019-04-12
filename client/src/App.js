import React, { Component } from 'react';
import './App.css';
import UserContainer from './container/UserContainer';
import NYTbookList from './components/NYTbookList';
import { connect } from 'react-redux';
import NavBarcomp from './components/NavBarcomp';

import { Route, Redirect, Switch } from 'react-router-dom';
import BestSellers from './container/BestSellers';
import UserBooks from './components/UserBooks';
import { logOutUser } from './actions/userActions';
import { getUserBooks } from './actions/bookActions';
import { logInForRefresh } from './actions/userActions';

class App extends Component {

  componentDidMount() {
    if (this.props.books.length === 0) {
      this.props.getUserBooks(sessionStorage['user'])

      this.props.logInForRefresh(sessionStorage['user'], sessionStorage['username'])

    } else {
      console.log("route props",this.props)
    }
  }
  render() {
    const loggedIn = () => !!sessionStorage['jwt']
    const logout = () => {
      if(!!sessionStorage['jwt'])
      this.props.logOutUser(this.props.user)
      sessionStorage.removeItem('jwt')
        sessionStorage.removeItem('user')
      return <Redirect to="/"/>
    }
    console.log("route props",this.props)
    const logged = !!sessionStorage['jwt'] ? <NYTbookList /> : <UserContainer signUp={this.props.signUp}/>
    const nav = !!sessionStorage['jwt'] ? <NavBarcomp userId={this.props.userId}/> : null
    return (
      <div className="App">
        {nav}
        <Switch>
        <Route exact path="/" render={() => logged} />
        <Route path="/bestsellers" component= {() => !loggedIn() ? <Redirect to="/"/> : <BestSellers /> }/>
        <Route path="/users/:id/books" render= {(routerProps) => !loggedIn() ? <Redirect to="/"/> : <UserBooks {...routerProps} /> }/>
        <Route path='/logout' component={ () => logout()} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    books: state.books,
   signUp: state.signUp,
   loggedIn: state.loggedIn,
   userId: state.userId
 }}
export default connect(mapStateToProps,{logOutUser, getUserBooks, logInForRefresh})(App);
