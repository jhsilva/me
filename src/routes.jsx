import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

const MenuLoadableComponent = Loadable({
  loader: () => import('./components/Menu' /* webpackChunkName: 'Menu' */),
  loading() {
    return <div>Loading...</div>;
  },
});

const PageHomeLoadableComponent = Loadable({
  loader: () =>
    import('./components/PageHome' /* webpackChunkName: 'PageHome' */),
  loading() {
    return <div>Loading...</div>;
  },
});

const PageAboutLoadableComponent = Loadable({
  loader: () =>
    import('./components/PageAbout' /* webpackChunkName: 'PageAbout' */),
  loading() {
    return <div>Loading...</div>;
  },
});

const PageExperienceLoadableComponent = Loadable({
  loader: () =>
    import('./components/PageExperience' /* webpackChunkName: 'PageExperience' */),
  loading() {
    return <div>Loading...</div>;
  },
});

const PageContactLoadableComponent = Loadable({
  loader: () =>
    import('./components/PageContact' /* webpackChunkName: 'PageContact' */),
  loading() {
    return <div>Loading...</div>;
  },
});

const PageLabLoadableComponent = Loadable({
  loader: () =>
    import('./components/PageLab' /* webpackChunkName: 'PageLab' */),
  loading() {
    return <div>Loading...</div>;
  },
});

const Routes = () => (
  <div>
    <MenuLoadableComponent />
    <Route exact path="/" component={PageHomeLoadableComponent} />
    <Route path="/about" component={PageAboutLoadableComponent} />
    <Route path="/experience" component={PageExperienceLoadableComponent} />
    <Route path="/contact" component={PageContactLoadableComponent} />
    <Route path="/lab" component={PageLabLoadableComponent} />
  </div>
);

export default Routes;
