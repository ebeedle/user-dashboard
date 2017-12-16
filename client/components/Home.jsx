import React from 'react';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
  }

  redirect(link) {
    console.log('redirecting')
    this.props.history.push({
      pathname: `/${link}`,
    })
  }

  render() {
    return (
      <div>
        <div className="user_dashboard">
          <div className="header" id="home"> User Dashboard </div>
        </div>
        <div className="home"> 
          <div> Welcome to the User Dashboard! </div>
          <div> Please <span onClick={() => this.redirect('signup')} className="link"> Sign Up </span> or <span onClick={() => this.redirect('login')}className="link"> Log In </span> to continue </div>
        </div>
      </div>
    )
  }
}

export default Home;