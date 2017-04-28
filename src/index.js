import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Landing from './components/Landing';
import Reo1 from './components/Reo1';
import PageNotFound from './components/PageNotFound';

import 'normalize.css';

const routes = (
  /*<Route path="/voter-react-spa/" mapMenuTitle="Landing" component={App}>*/
  <Route path="/" mapMenuTitle="Landing" component={App}>
    <IndexRoute component={Landing} />

    <Route path="reo-1" mapMenuTitle="Reo1" component={Reo1} />

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
