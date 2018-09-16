import { connect } from 'react-redux'
import MainContent from '../components/MainContent'

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  }
}

export default connect(mapStateToProps, null)(MainContent)