import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

// Main Components
import { Home } from '../views';

const routes = (
  <Switch>
    <Route path="/login" component={Home} />
    <Route path="*" component={() => <Redirect to="/login" />} />
  </Switch>
);

export default routes;
