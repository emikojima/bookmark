import React from 'react';
import App from '../App.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter = () => {
  return(
    <Router>
      <>
        <Route path="/" component={App}/>
      </>
    </Router>
  )
}

export default AppRouter;
