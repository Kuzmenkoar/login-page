import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './un-authorized.scss';

const UnAuthorized = () => (
  <div className="df jcc aic un-authorized">
    Please
    <Link to="/signIn" className="ml20">
      SignIn
    </Link>
  </div>
);

export default connect()(UnAuthorized);
