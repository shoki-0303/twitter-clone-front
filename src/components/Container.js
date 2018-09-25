import React from 'react';
import styled, { css } from 'styled-components'

import Drawer from '../Conteiners/Drawer'
import Header from '../Conteiners/Header'
import Footer from '../Conteiners/Footer'
import Content from '../Conteiners/Content'
import UserModal from '../Conteiners/UserModal'

const DrawerWrapper = styled.div`
  -webkit-transition: all 0.15s ease-in;
  -moz-transition: all 0.15s ease-in;
  -o-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;

  ${(props)=>
    props.isOpenDrawer && css`
      -webkit-transform: translate3d(240px, 0, 0);
      -moz-transform: translate3d(240px, 0, 0);
      transform: translate3d(240px, 0, 0);
      box-shadow: rgba(0, 0, 0, 0.12) -2px 0px 4px;
    `
  }
`

class Container extends React.Component {
  render() {
    const { isOpenDrawer } = this.props.common
    return(
      <DrawerWrapper isOpenDrawer={isOpenDrawer}>
        <UserModal/>
        <Drawer/>
        <Header/>
        <Content/>
        <Footer/>
      </DrawerWrapper>
    );
  }
}

export default Container