import React, { Component } from 'react';
import './App.css';
import UserContainer from './container/UserContainer';
import NYTbookList from './components/NYTbooks/NYTbookList';
import { connect } from 'react-redux';
import NavBarcomp from './components/NavBarcomp';
import { Route, Redirect, Switch } from 'react-router-dom';
import BestSellers from './container/BestSellers';
import UserBooks from './components/UserBooks/UserBooks';
import { logOutUser, logInForRefresh } from './actions/userActions';
import { getUserBooks } from './actions/bookActions';
import AlertList from './components/Alerts/AlertList';

class App extends Component {

  componentDidMount() {
    if (sessionStorage['user']) {
      this.props.logInForRefresh(sessionStorage['user'], sessionStorage['username'])
      this.props.getUserBooks(sessionStorage['user'])
    }
  }
  render() {
    const loggedIn = () => !!sessionStorage['user']
    const logout = () => {
      if(!!sessionStorage['jwt'])
      sessionStorage.removeItem('jwt')
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('username')
      this.props.logOutUser(this.props.user)
      return <Redirect to="/"/>
    }
    const logged = loggedIn() ? <NYTbookList user={this.props.user} getUserBooks={this.props.getUserBooks}/> : <UserContainer signUp={this.props.signUp}/>
  const nav = loggedIn() ? <NavBarcomp username={this.props.username} books={this.props.books} /> : null
    return (
      <div className="App">
        {nav}
        <AlertList />
        <Switch>
        <Route exact path="/" render={() => logged} />
        <Route path="/bestsellers-fiction" component= {() => !loggedIn() ? <Redirect to="/"/> : <BestSellers rgenre="books"/> }/>
        <Route path="/bestsellers-nonfiction" component= {() => !loggedIn() ? <Redirect to="/"/> : <BestSellers rgenre="nonfiction" /> }/>
        <Route path="/bestsellers-science" component= {() => !loggedIn() ? <Redirect to="/"/> : <BestSellers rgenre="science" /> }/>
        <Route exact path="/users/:id/books" render= {(routerProps) => !loggedIn() ? <Redirect to="/"/> : <UserBooks {...routerProps} /> }/>
        <Route path="/login" component={ () => logout()} />
        <Route path='/logout' component={ () => logout()} />
        <Route render={() => <h1 className="error-404">404 Error - Page not found</h1>} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
   books: state.user.books,
   signUp: state.user.signUp,
   loggedIn: state.user.loggedIn,
   username: state.user.username,
   user: state.user.userId
 }}
export default connect(mapStateToProps,{logOutUser, getUserBooks, logInForRefresh})(App);
