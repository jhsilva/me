import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

const MenuLoadableComponent = Loadable({
  loader: () => import('./components/Menu' /* webpackChunkName: 'menu' */),
  loading() {
    return <div>Loading...</div>;
  },
});

const PageHomeLoadableComponent = Loadable({
  loader: () => import('./components/PageHome' /* webpackChunkName: 'home' */),
  loading() {
    return <div>Loading...</div>;
  },
});

const Routes = () => (
  <div>
    <MenuLoadableComponent />
    <Route exact path="/" component={PageHomeLoadableComponent} />
  </div>
);

export default Routes;
