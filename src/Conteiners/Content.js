import { connect } from 'react-redux'
import Content from '../components/Content'

const mapStateToProps = state => {
  return {
    common: state.common
  }
}

export default connect(mapStateToProps, null)(Content)