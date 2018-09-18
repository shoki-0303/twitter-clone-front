import { connect } from 'react-redux'
import Drawer from '../components/Drawer'

const mapStateToProps = state => {
  return {
    common: state.common
  }
}

export default connect(mapStateToProps, null)(Drawer)