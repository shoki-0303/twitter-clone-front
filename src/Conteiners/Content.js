import { connect } from 'react-redux'
import Content from '../components/Content'
import * as CommonActions from '../actions/CommonActions'
import { bindActionCreators } from 'redux'

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

export default connect(mapStateToProps, mapDispatchToProps)(Content)