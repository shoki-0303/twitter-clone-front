import React from 'react';
import styled, { css } from 'styled-components'

const Content = styled.footer`
  padding: 5px 0;
  text-align: center;
  background-color: #47a8d48a;

  ${(props)=>
    props.isOpenDrawer && css`
      opacity: 0.3;
    `
  }
`
const CopyRight = styled.p`
  font-size: 8px;
  color: #8c7b7bc4;
`

class Footer extends React.Component{
  render() {
    const { isOpenDrawer } = this.props.common
    const { closeDrawer } = this.props.CommonActions
    return(
      <Content isOpenDrawer={isOpenDrawer} onClick={()=>{isOpenDrawer && closeDrawer()}}>
        <CopyRight>Copyright twistagram all rights reserved</CopyRight>
      </Content>
    );
  }
}

export default Footer