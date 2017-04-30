import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Landing from './components/Landing';
import Reo1New from './components/Reo1New';
import Reo1Change from './components/Reo1Change';
import Reo41 from './components/Reo41';
import PageNotFound from './components/PageNotFound';

import 'normalize.css';

const routes = (
  /* gh-pages switch */
  /*<Route path="/voter-react-spa/" mapMenuTitle="Landing" component={App}>*/
  /*<Route path="/" mapMenuTitle="Landing" component={App}>*/
  <Route path="/voter-react-spa/" mapMenuTitle="Landing" component={App}>
    <IndexRoute component={Landing} />

    <Route path="reo-1/new" mapMenuTitle="Reo1New" component={Reo1New} />
    <Route path="reo-1/change" mapMenuTitle="Reo1Change" component={Reo1Change} />
    <Route path="reo-41" mapMenuTitle="Reo41" component={Reo41} />

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
