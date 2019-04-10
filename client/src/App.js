import React, { Component } from 'react';
import './App.css';
import UserContainer from './container/UserContainer';
import NYTbookList from './components/NYTbookList';
import { connect } from 'react-redux';
import NavBarcomp from './components/NavBarcomp'

import { Route, Redirect, Switch } from 'react-router-dom'
import BestSellers from './container/BestSellers'
import UserBooks from './components/UserBooks'
import { logOutUser } from './actions/userActions'


class App extends Component {
  render() {
    const loggedIn = () => !!sessionStorage['jwt']
    const logout = () => {
      if(()=>loggedIn())
      this.props.logOutUser(this.props.user)
      sessionStorage.removeItem('jwt')
      return <Redirect to="/"/>
    }
    console.log("route props",this.props)
    const logged = !!sessionStorage['jwt'] ? <NYTbookList /> : <UserContainer signUp={this.props.signUp}/>
    const nav = !!sessionStorage['jwt'] ? <NavBarcomp /> : null

    return (
      <div className="App">
        <Switch>
        <Route exact path="/" render={() => logged} />
        <Route path="/bestsellers" component= {() => !loggedIn() ? <Redirect to="/"/> : <BestSellers /> }/>
        <Route path="/books" component= {() => !loggedIn() ? <Redirect to="/"/> : <UserBooks /> }/>
        <Route path='/logout' component={ () => logout()} />
        </Switch>
        {nav}
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
   signUp: state.signUp,
   loggedIn: state.loggedIn
 }}
export default connect(mapStateToProps,{logOutUser})(App);
