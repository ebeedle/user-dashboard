import React from 'react';
import SingleInput from './SingleInput.jsx';
import Button from './Button.jsx';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import ImageUpload from './Image.jsx';

class EditInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      description: null,
      imageUrl: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {
    let email = this.props.location.state.email;
    $.get('/userInfo', {email: this.props.location.state.email})
    .then(userInfo => {
      this.setState(userInfo)
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let stateCopy = Object.assign({}, this.state);
    delete stateCopy.redirect
    console.log('statecopy :', stateCopy)
    $.post('/edit', stateCopy)
    .done(data => {
      this.props.history.push({
            pathname: '/portal',
            state: {email: this.state.email, owner: this.state.email}
      })
    })
    .fail(err => alert('there was an issue signing up. Your image might be too large. Please try again'))
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
        <div className="header"> Edit Info </div>
        <form onSubmit={this.handleSubmit}>
          <SingleInput onChange={this.handleInputChange} category={'firstName'} value={this.state.firstName}/>
          <SingleInput onChange={this.handleInputChange} category={'lastName'} value={this.state.lastName}/>
          <div className="form-group">
            <label> Description </label>
            <textarea onChange={this.handleTextAreaChange} placeholder={this.state.description ? this.state.description : 'Description'} className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
          </div>

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

export default EditInfo