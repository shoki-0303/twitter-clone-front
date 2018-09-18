import { connect } from 'react-redux'
import Container from '../components/Container'

const mapStateToProps = state => {
  return {
    common: state.common
  }
}

export default connect(mapStateToProps, null)(Container)