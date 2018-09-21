import React from 'react'
import styled from 'styled-components'
import Tweet from '../components/Tweet'
import { Link } from 'react-router-dom'

const Content = styled.div`
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

class TweetsPage extends React.Component {
  constructor(props) {
    super(props)
    props.tweetAction.fetchTweets()
  }
  render() {
    const { tweets } = this.props
    console.log(this.props.tweets)
    return (
      <Content>
        {tweets.map((tweet, key)=>{
          return(
            <Link key={key} to={`/tweets/${tweet.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Tweet tweet={tweet}/>
            </Link>
          );
        })}
      </Content>
    );
  }
}

export default TweetsPage