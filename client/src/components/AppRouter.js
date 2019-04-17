import React from 'react';
import App from '../App.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter = () => {
  return(
    <Router>
      <div>
        <Route path="/" component={App}/>
        <link
         rel="stylesheet"
         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
         crossorigin="anonymous" />
      </div>
    </Router>
  )
}

export default AppRouter;
