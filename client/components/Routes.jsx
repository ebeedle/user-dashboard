import React from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Routes = () => (
  <div>
    <div> HIIIIII </div>
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </div>
)

export default Routes