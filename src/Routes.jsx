import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Home from './containers/Home';

const LoadableAbout = Loadable({
  loader: () => import('./containers/About'),
  loading() {
    return <div>Loading...</div>;
  }
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={LoadableAbout} />
  </Switch>
);

export default Routes;
