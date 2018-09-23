import React from 'react'
import TweetsPage from '../Conteiners/TweetsPage'
import TweetPage from '../Conteiners/TweetPage'
import UserPage from '../Conteiners/UserPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class MainContent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TweetsPage}/>
          <Route exact path="/tweets" component={TweetsPage}/>
          <Route exact path="/tweets/:id" component={TweetPage}/>
          <Route exact path="/users/:id" component={UserPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}


export default MainContent