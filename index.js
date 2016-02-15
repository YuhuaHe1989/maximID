import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import AppController from './components/AppController'
import Dashboard from './components/Dashboard'
import Setup from './components/Setup'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppController}>
      <Route path="/dashboard.html" component={Dashboard} />
      <Route path="/setup.html" component={Setup} />
    </Route>
  </Router>
  ), document.getElementById('maximID'));