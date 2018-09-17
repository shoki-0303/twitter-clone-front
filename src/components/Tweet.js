import React from 'react'
import styled from 'styled-components'

const Cell = styled.a`
  display: block;
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`
const CellHeader = styled.div`
`
const Category = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: #8be62178;
  padding: 8px 20px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`
const Title = styled.p`
`
const Image = styled.div``

const Description = styled.p``

const Tweet = ({tweet}) => {
  return (
    <Cell>
      <CellHeader>
        <Category>travel</Category>
        <Title>{tweet.title}</Title>
      </CellHeader>
      <Image/>
      <Description>{tweet.body}</Description>
    </Cell>
  );
}

export default Tweet