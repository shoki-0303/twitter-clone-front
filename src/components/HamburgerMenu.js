import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #80808047;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  &:before {
    content: '';
    display: block;
    padding-top: 7px;
  }
`

const Line = styled.div`
  border-top: solid 2px #658290c7;
  margin: 5px 12px;
`

class HamburgerMenu extends React.Component {
  render() {
    return(
      <Content>
        <Line/>
        <Line/>
        <Line/>
      </Content>
    );
  }
}

export default HamburgerMenu