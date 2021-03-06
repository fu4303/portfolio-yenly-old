import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import AboutMe from './components/about';
import Projects from './containers/projects';
import Now from './components/now';
import MyArt from './components/my_art';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AboutMe} />
    <Route path="projects" component={Projects} />
    <Route path="now" component={Now} />
    <Route path="my_art" component={MyArt} />
  </Route>
);
