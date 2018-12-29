import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { PageNotFound } from '../not-found';

import { RouteNotFound } from '../../components/route';
import MainContainer from './main-container';

const Root = ({ location }) => {
  const { state } = location;

  if (state && state.notFoundError) {
    return <PageNotFound />;
  }
  return (
    <Switch>
      <Route path="/" component={MainContainer} />
      <RouteNotFound />
    </Switch>
  );
};

export default withRouter(Root);
