import Header from '../components/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CommonActions from '../actions/CommonActions'

const mapStateToProps = state => {
  return {
    common: state.common
  }
}

const mapDispatchToProps = dispatch => {
  return {
    CommonActions: bindActionCreators(CommonActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)