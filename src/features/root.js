import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/header/header';
import SignInForm from './authorization/SignInForm';
import SignUpForm from './authorization/SignUpForm';
import Contacts from './contacts';

import { signInRequest, signUpRequest } from '../ducks/authorization';

import { ProtectedRoute } from '../components/route';

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <ProtectedRoute path="/contacts" component={Contacts} />
          <Route
            path="/signIn"
            render={() => <SignInForm onSubmit={this.props.signInRequest} />}
          />
          <Route
            path="/signUp"
            render={() => <SignUpForm onSubmit={this.props.signUpRequest} />}
          />
          <Redirect to="/signIn" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ router, authorization: { firstContact } }) => {
  return {
    firstContact,
    router, // pure: false
  };
};

export default connect(
  mapStateToProps,
  { signInRequest, signUpRequest },
)(Root);
