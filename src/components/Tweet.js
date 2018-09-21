import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
  display: block;
  text-decoration: none;
  margin-top: 15px;
  border: solid 1px #03a9f469;
  padding: 10px 10px;
  max-width: 350px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  &:hover {
    cursor: pointer;
  }
`
const CellHeader = styled.div`
`
const Category = styled.p`
  display: inline-block;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: #8be62178;
  padding: 8px 20px;
  border-radius: 15px;
`
const Title = styled.p`
  font-size: 17px;
  margin-top: 5px;
`
const Image = styled.div`
  height: 200px;
  width: 300px;
  margin: 0 auto;
  background-color: #8080801c;
  background-size: cover;
  margin-top: 10px;
`

const Description = styled.p`
  margin-top: 10px;
  line-height: 20px;
`

const Tweet = ({tweet}) => {
  return (
    <Cell>
      <CellHeader>
        <Category>travel</Category>
        <Title>{tweet.title}</Title>
      </CellHeader>
      <Image style={{ backgroundImage: `url(${tweet.image})` }}/>
      <Description>{tweet.body}</Description>
    </Cell>
  );
}

export default Tweet