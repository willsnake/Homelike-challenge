import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

// Main Components
import { Home, Chat } from '../views';

const routes = (
  <Switch>
    <Route path="/login" component={Home} />
    <Route path="/chat" component={Chat} />
    <Route path="*" component={() => <Redirect to="/login" />} />
  </Switch>
);

export default routes;
