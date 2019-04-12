import React from 'react';
import App from '../App.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter = () => {
  return(
    <Router>
      <div>
        <Route path="/" component={App}/>
      </div>
    </Router>
  )
}

export default AppRouter;
