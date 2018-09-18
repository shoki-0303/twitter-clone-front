import React from 'react'
import styled from 'styled-components'

const DRAWER_WIDTH = 240

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: -${DRAWER_WIDTH}px;
  width: ${DRAWER_WIDTH}px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 10000;
  background-color: #f2f2f2;
`

class Drawer extends React.Component {
  render() {
    const {isOpenDrawer} = this.props.common
    console.log(isOpenDrawer)
    return (
      <Wrapper></Wrapper>
    );
  }
}

export default Drawer