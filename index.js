import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import AppController from './components/AppController'
import Dashboard from './components/Dashboard'
import Setup from './components/Setup'
import Apikeys from './components/Apikeys'
import Providers from './components/Providers'
import Userrepositories from './components/Userrepositories'
import Customers from './components/Customers'
import PoliciesAuth from './components/PoliciesAuth'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppController}>
      <Route path="/dashboard.html" component={Dashboard} />
      <Route path="/setup.html" component={Setup} />
      <Route>
        <Route path="/apikeys.html" component={Apikeys} />
        <Route path="/providers.html" component={Providers} />
        <Route path="/userrepositories.html" component={Userrepositories} />
        <Route path="/customers.html" component={Customers} />
        <Route>
          <Route path="/policiesAuth.html" component={PoliciesAuth} />
        </Route>
      </Route>
    </Route>
  </Router>
  ), document.getElementById('maximID'));







