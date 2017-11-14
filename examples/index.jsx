/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import IconsView from './components/icons-view/icons-view.component';

import './app.component.scss';

require('../images/favicon.ico');

render((
  <Router history={hashHistory}>
    <Route path="/" component={IconsView} />
  </Router>
), document.getElementById('oc-examples'));
