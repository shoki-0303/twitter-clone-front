import React from 'react'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
    props.tweetAction.fetchTweets()
  }
  render() {
    return (
      <div>Main Content</div>
    );
  }
}

export default MainContent