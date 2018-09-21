import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: -240px;
  width: 240px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 10000;
  &::-webkit-scrollbar {
    display: none;
  }
`
const UserContent = styled.div`
  padding: 10px 25px;
`
const CategoryContent = styled.div `
  padding: 10px 25px;
`

const Title = styled.li`
  list-style: none;
  color: #e46aabcc;
  background-color: #8080800f;
  padding: 12px 0;
  text-align: center;
  font-size: 18px;
`

const Cell = styled.li`
  list-style: none;
  background-color: white;
  padding: 18px 0;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #e46aabcc;
`

class Drawer extends React.Component {
  render() {
    const {isOpenDrawer} = this.props.common
    return (
      <Wrapper isOpenDrawer={isOpenDrawer}>
        <UserContent>
          <Title>User</Title>
          <Cell>Sign In</Cell>
          <Cell>My page</Cell>
        </UserContent>
        <CategoryContent>
          <Title>Category</Title>
          <Cell>Fashion</Cell>
          <Cell>Travel</Cell>
          <Cell>Gourmet</Cell>
          <Cell>Person</Cell>
          <Cell>Design</Cell>
          <Cell>Programing</Cell>
        </CategoryContent>
      </Wrapper>
    );
  }
}

export default Drawer