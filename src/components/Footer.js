import React from 'react';
import styled, { css } from 'styled-components'

const Content = styled.footer`
  height: 80px;
  background-color: gray;

  ${(props)=>
    props.isOpenDrawer && css`
      opacity: 0.3;
    `
  }
`

class Footer extends React.Component{
  render() {
    const { isOpenDrawer } = this.props.common
    const { closeDrawer } = this.props.CommonActions
    return(
      <Content isOpenDrawer={isOpenDrawer} onClick={()=>{isOpenDrawer && closeDrawer()}}>
        footer content
      </Content>
    );
  }
}

export default Footer