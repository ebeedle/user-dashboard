import React from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Portal from './Portal.jsx';
import EditInfo from './EditInfo.jsx';
import TempRedirect from './TempRedirect.jsx';
import Home from './Home.jsx';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/Portal" component={Portal} />
    <Route path="/edit" component={EditInfo} />
    <Route path="/tempRedirect" component={TempRedirect} />
  </div>
)

export default Routes