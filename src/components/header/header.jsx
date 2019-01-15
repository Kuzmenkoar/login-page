import React from 'react';
import Button from '@material-ui/core/Button';

import './header.scss';
import history from '../../history';

export default function Header() {
  return (
    <div className="header">
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/signIn')}
      >
        LogIn
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/signUp')}
      >
        Sign Up
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/contacts')}
      >
        Contacts
      </Button>
    </div>
  );
}
