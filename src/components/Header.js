import React from 'react';
import styled, { css } from 'styled-components'
import HamburgerMenu from './HamburgerMenu'
import logo from '../images/logo.png'

const Content = styled.header`
  padding: 10px 0;
  border-bottom: 1px solid #80808047;
  position: relative;

  ${(props)=>
    props.isOpenDrawer && css`
      opacity: 0.3;
    `
  }
`
const Logo = styled.div`
  display: block;
  margin: 0 auto;
  height: 40px;
  width: 170px;
  background-image: ${({logo})=>`url(${logo})`};
`

class Header extends React.Component{
  render() {
    const {isOpenDrawer} = this.props.common
    const {openDrawer, closeDrawer} = this.props.CommonActions
    console.log(isOpenDrawer)
    return(
      <Content isOpenDrawer={isOpenDrawer}>
        <HamburgerMenu openDrawer={openDrawer}/>
        <Logo logo={logo}/>
      </Content>
    );
  }
}

export default Header