import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
  padding: 0 15px;
`
const Category = styled.p`
  display: inline-block;
  color: #fff;
  background-color: #4fb94f78;
  margin-top: 15px;
  margin-left: 10px;
  padding: 8px 18px;
`
const Title = styled.h2`
  font-size: 20px;
  padding-top: 20px;
  padding-left: 10px;
`
const Image = styled.div`
  margin: 20px auto 0;
  height: 240px;
  width: 360px;
  background-color: #80808047;
  background-size: cover;
  background-image: ${({imageUrl})=>`url(${imageUrl})`};
`
const Description = styled.p`
  display: block;
  padding-top: 25px;
  line-height: 25px;
`

class TweetPage extends React.Component {
  constructor(props) {
    super(props)
    const id = props.match.params.id
    this.props.tweetsAction.fetchTweet(id)
  }
  render() {
    const { title, image, body } = this.props.tweet
    return (
      <Cell>
        <Title>{title}</Title>
        <Category>fashion</Category>
        <Image imageUrl={image}/>
        <Description>{body}</Description>
      </Cell>
    );
  }
}

export default TweetPage