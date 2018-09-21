import React from 'react'

class TweetPage extends React.Component {
  constructor(props) {
    super(props)
    const id = props.match.params.id
    this.props.tweetsAction.fetchTweet(id)
  }
  render() {
    return (
      <h2>TweetPage</h2>
    );
  }
}

export default TweetPage