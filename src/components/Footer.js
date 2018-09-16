import React from 'react';
import styled from 'styled-components'

const Content = styled.footer`
  height: 80px;
  background-color: gray;
`

class Footer extends React.Component{
  render() {
    return(
      <Content>
        footer content
      </Content>
    );
  }
}

export default Footer