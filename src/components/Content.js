import React from 'react'
import MainContent from './MainContent'
import SubContent from './SubContent'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`

  ${(props)=>
    props.isOpenDrawer && css`
      opacity: 0.3;
    `
  }
`

class Content extends React.Component {
  render() {
    const { isOpenDrawer } = this.props.common
    const { closeDrawer } = this.props.CommonActions
    return (
      <Wrapper isOpenDrawer={isOpenDrawer} onClick={()=>{isOpenDrawer && closeDrawer()}}>
        <MainContent/>
        <SubContent/>
      </Wrapper>
    );
  }
}

export default Content