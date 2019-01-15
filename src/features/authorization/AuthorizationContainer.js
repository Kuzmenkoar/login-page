import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner';

class AuthorizationContainer extends Component {
  render() {
    const { children, isLoading } = this.props;
    if (isLoading) {
      return (
        <div style={{ height: '200px', position: 'relative' }}>
          <Spinner />
        </div>
      );
    }

    return children;
  }
}

const mapStateToProps = ({ authorization: { isLoading, error, user } }) => ({
  isLoading,
  isAuthorized: !!user,
  error,
});

export default connect(mapStateToProps)(AuthorizationContainer);
