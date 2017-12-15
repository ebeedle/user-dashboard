import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SingleInput from './SingleInput.jsx';
import Button from './Button.jsx';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import ImageUpload from './Image.jsx';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      description: null,
      imageUrl: null,
      redirect: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let stateCopy = Object.assign({}, this.state);
    delete stateCopy.redirect
    $.post('/signup', stateCopy)
    .done(data => this.setState({redirect: true}))
    .fail(err => alert('there was an issue signing up. Please try again later'))
  }

  handleTextAreaChange(event) {
    this.setState({description : event.target.value})
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

  handleImageChange(e) {
    console.log('image uploaded')
    e.preventDefault();
    let file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var dataURL = reader.result;
      // console.log(dataURL)
      // var img = $('<img >'); //Equivalent: $(document.createElement('img'))
      // let img = 
      // img.attr('src', reader.result);
      // $('#display').append(img)
      // console.log('data :', dataURL)
      this.setState({
        imageUrl: dataURL
      })
    }.bind(this);

    reader.readAsDataURL(file);
  }
  render() {
    console.log('imageURL:', this.state.imageUrl)
    if (this.state.redirect) {
      return <Redirect to='/login'/>;
    }
    return (
      <div className="container">
        <div className="header"> Sign Up </div>
        <form onSubmit={this.handleSubmit}>
          <SingleInput onChange={this.handleInputChange} category={'firstName'}/>
          <SingleInput onChange={this.handleInputChange} category={'lastName'}/>
          <div className="form-group">
            <label> Description </label>
            <textarea onChange={this.handleTextAreaChange} placeholder="Description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <SingleInput onChange={this.handleInputChange} category={'email'}/>
          <SingleInput onChange={this.handleInputChange} category={'password'}/>
          <ImageUpload onChange={this.handleImageChange} />
          <div className="display">
            <img src={this.state.imageUrl} />
          </div>
          <Button />
        </form>
      </div>
    )
  }
}

export default Signup;