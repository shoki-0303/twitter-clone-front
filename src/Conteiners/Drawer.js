import { connect } from 'react-redux'
import Drawer from '../components/Drawer'
import { bindActionCreators } from 'redux'
import * as commonActions from '../actions/CommonActions'

const mapStateToProps = state => {
  return {
    common: state.common
  }
}

const mapDispatchToProps = dispatch => {
  return {
    commonActions: bindActionCreators(commonActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)