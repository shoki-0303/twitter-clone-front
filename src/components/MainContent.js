import React from 'react'
import TweetsPage from '../Conteiners/TweetsPage'
import TweetPage from '../pages/TweetPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class MainContent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TweetsPage}/>
          <Route exact path="/tweets" component={TweetsPage}/>
          <Route exact path="/tweets/:id" component={TweetPage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


export default MainContent