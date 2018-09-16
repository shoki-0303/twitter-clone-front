import React from 'react'
import axios from 'axios'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
    axios.get('http://localhost:3001/api/v1/tweets')
    .then((response)=>{
      console.log(response)
    })
    .error((error)=>{
      console.log(error)
    })
  }
  render() {
    return (
      <div>Main Content</div>
    );
  }
}

export default MainContent