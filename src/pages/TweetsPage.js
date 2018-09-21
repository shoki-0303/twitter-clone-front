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
  componentWillMount() {
    console.log(this.props)
    this.props.tweetAction.fetchTweets()
  }
  render() {
    const { entities } = this.props.tweets
    return (
      <Content>
        {entities && entities.map((tweet, key)=>{
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