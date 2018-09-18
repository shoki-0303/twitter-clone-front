import React from 'react';
import styled, { css } from 'styled-components'

const Content = styled.footer`
  height: 80px;
  background-color: gray;

  -webkit-transition: all 0.15s ease-in;
  -moz-transition: all 0.15s ease-in;
  -o-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;

  ${(props)=>
    props.isOpenDrawer && css`
      opacity: 0.3;
      -webkit-transform: translate3d(150px, 0, 0);
      -moz-transform: translate3d(150px, 0, 0);
      transform: translate3d(150px, 0, 0);
      box-shadow: rgba(0, 0, 0, 0.12) -2px 0px 4px;
    `
  }
`

class Footer extends React.Component{
  render() {
    const { isOpenDrawer } = this.props.common
    return(
      <Content isOpenDrawer={isOpenDrawer}>
        footer content
      </Content>
    );
  }
}

export default Footer