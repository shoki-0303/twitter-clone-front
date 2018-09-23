import { connect } from 'react-redux'
import UserPage from '../pages/UserPage'
import * as UserActions from '../actions/UserActions'
import { bindActionCreators } from 'redux'

const mapDispatchToprops = dispatch => {
  return {
    userActions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(null, mapDispatchToprops)(UserPage)