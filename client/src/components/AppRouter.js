import React from 'react';
import App from '../App.js'
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import BestSellers from './BestSellers'
import UserBooks from './UserBooks'


const AppRouter = () => {
  return(
    <Router>
      <div>
        <Route exact path="/bestsellers" component={BestSellers} />
        <Route exact path="/" component={App} />
        <Route exact path="/books" component={UserBooks} />
      </div>
    </Router>
  )
}

export default AppRouter;
