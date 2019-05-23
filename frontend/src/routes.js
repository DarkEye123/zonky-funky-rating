import React from 'react';
import { Route } from 'react-router-dom';
import { Login, Help, Marketplace } from './components';

const PAGES = {
  home: '/',
  marketplace: '/marketplace',
  help: '/help',
};
const Routes = () => (
  <>
    <Route path={PAGES.home} exact component={Login} />
    <Route path={PAGES.marketplace} component={Marketplace} />
    <Route path={PAGES.help} component={Help} />
  </>
);

export { PAGES };

export default Routes;
