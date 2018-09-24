import React from 'react'
import Error from '../components/Error'

class UserPage extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id
    this.props.userActions.fetchUser(id)
  }
  render() {
    const { user } = this.props
    if (user.error.status === 404) {
      return <Error statusCode={user.error.status}/>
    }
    return(
      <div>
        <div>UserPage</div>
      </div>
    );
  }
}

export default UserPage