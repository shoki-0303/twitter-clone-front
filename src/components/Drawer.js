import React from 'react'
import styled, { css } from 'styled-components'

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

  -webkit-transition: all 0.15s ease-in;
  -moz-transition: all 0.15s ease-in;
  -o-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;

  ${(props) => 
    props.isOpenDrawer &&
    css`
      -webkit-transform: translate3d(150px, 0, 0);
      -moz-transform: translate3d(150px, 0, 0);
      transform: translate3d(150px, 0, 0);
      box-shadow: rgba(0, 0, 0, 0.12) -2px 0px 4px;    
    `
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