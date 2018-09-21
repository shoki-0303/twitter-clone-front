import TweetPage from '../pages/TweetPage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TweetsActions from '../actions/TweetsActions'

const mapStateToProps = state => {
  return {
    tweet: state.tweets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tweetsAction: bindActionCreators(TweetsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetPage)