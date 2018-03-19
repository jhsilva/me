import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

const PageHomeLoadableComponent = Loadable({
  loader: () => import('./components/PageHome' /* webpackChunkName: 'home' */),
  loading() {
    return <div>Loading...</div>;
  },
});

const Routes = () => (
  <div>
    <Route exact path="/" component={PageHomeLoadableComponent} />
  </div>
);

export default Routes;
