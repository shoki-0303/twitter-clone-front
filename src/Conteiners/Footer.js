import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = state => {
  return {
    common: state.common
  }
}

export default connect(mapStateToProps, null)(Footer)