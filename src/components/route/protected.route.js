import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { routes } from '../../constants/routes';
import AdfsLogin from '../../features/authorization/adfs-login';
import { actionCreators as authorizationActionCreators } from '../../features/authorization';

const isAcceptableRole = (userRole, appropriateRoles = []) => {
  return appropriateRoles.some((role) => role === userRole);
};

const ProtectedRoute = (props) => {
  const { component: Component, layout: Layout, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => {
        const { token, userProfile } = props.auth;

        if (!token) {
          return WEBPACK_PROD_BUILD ? (
            <AdfsLogin />
          ) : (
            <Redirect to={routes.login} />
          );
        }

        props.verifyToken();

        const isAllowed =
          !props.appropriateRoles ||
          isAcceptableRole(
            props.auth.userProfile.role && props.auth.userProfile.role.roleId,
            props.appropriateRoles,
          );

        if (!isAllowed) {
          return <Redirect to={routes.forbidden} />;
        }

        if (!userProfile.role) {
          return <Redirect to={routes.unauthenticated} />;
        }

        if (
          props.validateDeactivation &&
          userProfile.country &&
          !userProfile.country.active
        ) {
          return <Redirect to={routes.deactivated} />;
        }

        return props.layout ? (
          <Layout {...props} {...matchProps} />
        ) : (
          <Component {...props} {...matchProps} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  verifyToken: authorizationActionCreators.verifyToken,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProtectedRoute);
