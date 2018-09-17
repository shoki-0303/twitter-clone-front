import React from 'react'
import styled from 'styled-components'
import Tweet from './Tweet'

const Content = styled.div`
  padding: 0 15px;
`

class MainContent extends React.Component {
  constructor(props) {
    super(props)
    props.tweetAction.fetchTweets()
  }
  render() {
    const { tweets } = this.props
    console.log(tweets)
    return (
      <Content>
        {tweets.map((tweet, key)=>{
          return(
            <Tweet tweet={tweet} key={key}/>
          );
        })}
      </Content>
    );
  }
}

export default MainContent