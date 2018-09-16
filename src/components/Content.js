import React from 'react'
import MainContent from './MainContent'
import SubContent from './SubContent'

class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainContent/>
        <SubContent/>
      </React.Fragment>
    );
  }
}

export default Content