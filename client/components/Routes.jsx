import React from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import EditInfo from './EditInfo.jsx';
import TempRedirect from './TempRedirect.jsx';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Routes = () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route path="/signup"   component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/edit" component={EditInfo} />
    <Route path="/tempRedirect" component={TempRedirect} />
  </div>
)

export default Routes