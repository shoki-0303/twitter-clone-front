import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: -150px;
  width: 150px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 10000;
  background-color: #f2f2f2;
  }
`

class Drawer extends React.Component {
  render() {
    const {isOpenDrawer} = this.props.common
    return (
      <Wrapper isOpenDrawer={isOpenDrawer}>
      </Wrapper>
    );
  }
}

export default Drawer