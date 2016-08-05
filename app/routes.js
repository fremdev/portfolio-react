import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="portfolio" component={PortfolioPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);

export default routes;
