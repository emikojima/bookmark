import React, { Component } from 'react';
import { connect } from 'react-redux'
import App from '../App.js'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import BestSellers from '../container/BestSellers'
import UserBooks from './UserBooks'
import { logOutUser } from '../actions/userActions'
import UserContainer from '../container/UserContainer'

class AppRouter extends Component {
  render(){
    const loggedIn = () => !!sessionStorage['jwt']
    const logout = () => {
      if(loggedIn())
      this.props.logOutUser(this.props.user)
      sessionStorage.removeItem('jwt')
      return <Redirect to="/"/>
    }
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/bestsellers" component={ () => loggedIn() ? <BestSellers /> : <UserContainer />} />
            <Route path="/books" component={ () => loggedIn() ? <UserBooks /> : <UserContainer />} />
            <Route path='/logout' component={ () => logout() }/>
          </Switch>
        </div>
      </Router>
    )
}}

const mapStateToProps = state => {
  return {
    books: state.books,
    user: state.userId,
    nytbooks: state.nytbooks,
  };
};

export default connect(mapStateToProps,{logOutUser}) (AppRouter);
