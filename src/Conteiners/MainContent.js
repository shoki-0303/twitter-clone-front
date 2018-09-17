import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TweetsActions from '../actions/TweetsActions'
import MainContent from '../components/MainContent'

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tweetAction: bindActionCreators(TweetsActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent)