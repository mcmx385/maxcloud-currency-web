import './App.css'
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  Redirect,
} from 'react-router-dom'

import TaskListPage from './pages/TaskList'
import AboutPage from './pages/About'
import NotFoundPage from './pages/NotFound'
import UsersPage from './pages/Users'
import IndexPage from './pages/Index'
import RandUserPage from './pages/RandUser'
import CurrencyPage from './pages/Currency'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CurrencyPage} />
          <Route exact path="/index" component={IndexPage} />
          <Route exact path="/tasks" component={TaskListPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/randusers" component={RandUserPage} />
          <Route exact path="/currency" component={CurrencyPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
}

export default App
