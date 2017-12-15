import React from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Routes = () => (
  <div>
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
  </div>
)

export default Routes