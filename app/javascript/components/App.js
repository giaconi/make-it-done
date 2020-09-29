import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Lists from './Lists/Lists'
import List from './List/List'


const App = () => {
  return (
  <Switch>
    <Route exact path="/" component={Lists}/>
    <Route exact path="/lists/:slug" component={List}/>
  </Switch>
  )
}

export default App