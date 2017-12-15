import React from 'react';
import SingleInput from './SingleInput.jsx';
import Button from './Button.jsx';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      redirect: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log('target :', target)
    console.log('name :', name, 'value :', value);
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({redirect: true})
    console.log('state :', this.state)
    alert('submitted');
    
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to='/home'/>;
    }

    return (
      <div className="container">
        <div className="header"> Log In </div>
        <form onSubmit={this.handleSubmit}>
          <SingleInput onChange={this.handleInputChange} category={'email'}/>
          <SingleInput onChange={this.handleInputChange} category={'password'}/>
          <Button />
        </form>
      </div>
    )
  }
}


export default Login;