import React from 'react';
import styled from 'styled-components'

const Content = styled.header`
  background-color: gray;
`

class Header extends React.Component{
  render() {
    return(
      <Content>
        header content
      </Content>
    );
  }
}

export default Header