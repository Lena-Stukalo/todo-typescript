import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../home';
import { APP_KEYS } from '../common/consts';
import TestPageContainer from '../test';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route exact component={HomePageContainer} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route component={TestPageContainer} path={APP_KEYS.ROUTER_KEYS.TEST} />
    </Switch>
  </Router>
);
