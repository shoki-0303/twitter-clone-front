import React from 'react';
import styled from 'styled-components'
import HamburgerMenu from './HamburgerMenu'
import logo from '../images/logo.png'

const Content = styled.header`
  padding: 10px 0;
  border-bottom: 1px solid #80808047;
  position: relative;
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
    return(
      <Content>
        <HamburgerMenu />
        <Logo logo={logo}/>
      </Content>
    );
  }
}

export default Header