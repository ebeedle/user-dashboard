import React from 'react';


class TempRedirect extends React.Component {
  render() {
    let email = this.props.location.state.email;
    let owner = this.props.location.state.owner;
    this.props.history.push({
      pathname: '/home',
      state: {email: email, owner: owner}
    })

    return <div> </div>
  }
}

export default TempRedirect;