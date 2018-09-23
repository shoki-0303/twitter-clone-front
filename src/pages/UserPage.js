import React from 'react'

class UserPage extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id
    this.props.userActions.fetchUser(id)
  }
  render() {
    return(
      <div>UserPage</div>
    );
  }
}

export default UserPage