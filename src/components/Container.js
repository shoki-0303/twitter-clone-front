import React from 'react';
import styled from 'styled-components';

import Header from './Header'
import Footer from './Footer'

const View = styled.h2`
  margin-left: 20px;
`

class Container extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header/>
        <View>container</View>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Container