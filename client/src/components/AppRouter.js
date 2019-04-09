import React from 'react';
import App from '../App.js'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import BestSellers from '../container/BestSellers'
import UserBooks from './UserBooks'


const loggedIn = () => !!sessionStorage['user']

const logout = () => {
  if(loggedIn())
  sessionStorage.removeItem('user')

  return <Redirect to="/"/>
}

const AppRouter = () => {
  return(
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/bestsellers" component={BestSellers} />
          <Route path="/books" component={UserBooks} />
          <Route path='/logout' component={ () => logout() }/>
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
