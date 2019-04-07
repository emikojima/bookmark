import React from 'react';
import App from '../App.js'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BestSellers from './BestSellers'
import UserBooks from './UserBooks'


const AppRouter = () => {
  return(
    <Router>
      <div>
        { true ? <div>NAVIGATION</div> : null }
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/bestsellers" component={BestSellers} />
          <Route path="/books" component={UserBooks} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
