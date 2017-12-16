import React from 'react';
import $ from 'jquery';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      description: null,
      imageUrl: null,
      email: null,
      otherUsers: null,
      ownerEmail: null
    }
    this.editInfo = this.editInfo.bind(this); 
    this.redirect = this.redirect.bind(this);
    this.returnToProfile = this.returnToProfile.bind(this);
  }

  editInfo() {
    this.props.history.push({
      pathname: '/edit',
      state: {email: this.state.email}
    })
  }
  componentDidMount() {
    //find all users with getAll()
    //set state

    console.log('mounting');
    let previousState = this.props.location.state;
    if (!previousState) {
      this.props.history.push({
        pathname: '/login',
      })
      return;
    }
    let email = this.props.location.state.email;
    console.log('email :', email)
    $.get('/userInfo', {email: email})
    .done(userInfo => {
      console.log('user info :', userInfo)
      this.setState({
        firstName : userInfo.firstName,
        lastName: userInfo.lastName,
        description: userInfo.description,
        imageUrl: userInfo.imageUrl,
        email: userInfo.email,
        ownerEmail: this.props.location.state.owner
      })
    })

    $.get('/allUsers')
    .done(users => {
      users = users.filter(user => {
        return user.email !== email && user.email !== this.props.location.state.owner;
      })
      console.log('users :', users)

      this.setState({
        otherUsers: users
      })
    })
  }
  redirect(index) {
    let email = this.state.otherUsers[index].email;
    this.props.history.push({
      pathname: '/tempRedirect',
      state: {email: email, owner: this.state.ownerEmail}
    })
  }

  returnToProfile() {
   this.props.history.push({
      pathname: '/tempRedirect',
      state: {email: this.state.ownerEmail, owner: this.state.ownerEmail }
    }) 
  }

  render() {
    let otherUsers = this.state.otherUsers;
    let otherElements;
    if (otherUsers) {
      otherElements = otherUsers.map((user, index) => {
        return <div className="otherUser" onClick={() => this.redirect(index)}> {user.firstName} {user.lastName}</div>
      })
      
    }


    //map over otherUsers
    //creat divs that have onClickProperty
      //will set state of 


    //on click of edit
      //sign up page should could redirect to another page
      //will prefill values of signup
      //here you can edit
      //on click
    return (
      <div className="container wide">
        <div className="header bold"> Dashboard </div>
        <div className="name"> Hello, {this.state.firstName} {this.state.lastName}! </div>
        <div className="cf"> 
          <div className="home_left">
            <div className="description"> Bio: {this.state.description} </div>
            <div className="img_cont">
              <img className="img" src={this.state.imageUrl} />
            </div>
          </div>
          <div className="home_right">
            <div className="others">
              <div> View Other Users </div>
              {otherElements}
            </div>
          </div>
        </div>
        
        {this.state.ownerEmail === this.state.email ? (<div>
          <button onClick={this.editInfo} className="btn-sm btn-primary"> Edit </button>
        </div>) : null}

        {this.state.email !== this.state.ownerEmail ? (<button onClick={this.returnToProfile} className="btn-sm btn-primary"> return to profile </button>) : null}
      </div>
    )
  }
}

export default Home;