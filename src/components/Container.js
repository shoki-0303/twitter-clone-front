import React from 'react';
import styled from 'styled-components';

import Header from './Header'
import Footer from './Footer'
import Content from './Content'

class Container extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header/>
        <Content/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Container