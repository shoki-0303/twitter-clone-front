import React from 'react';

import Drawer from '../Conteiners/Drawer'
import Header from '../Conteiners/Header'
import Footer from './Footer'
import Content from './Content'

class Container extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Drawer/>
        <Header/>
        <Content/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Container