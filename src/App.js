import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Posts from './components/posts/Posts'
import PostDetails from './components/posts/PostDetails'
import TopBar from './components/layout/TopBar'

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/:id" component={PostDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
