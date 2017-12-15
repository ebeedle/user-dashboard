import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme()}>
  <BrowserRouter><App /></BrowserRouter></MuiThemeProvider>, document.getElementById('root'));
