import React from 'react';
import { Field, reduxForm } from 'redux-form';

import AuthorizationContainer from './AuthorizationContainer';

const SignUpForm = ({ handleSubmit }) => (
  <AuthorizationContainer>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">FirstName</label>
        <Field
          name="firstName"
          component="input"
          type="text"
          required
          placeholder="firstName"
        />
      </div>
      <div>
        <label htmlFor="lastName">LastName</label>
        <Field
          name="lastName"
          component="input"
          type="text"
          required
          placeholder="lastName"
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <Field
          name="email"
          component="input"
          type="text"
          required
          placeholder="email"
        />
      </div>
      <div>
        <label htmlFor="password">LastName</label>
        <Field
          name="password"
          component="input"
          type="text"
          required
          placeholder="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </AuthorizationContainer>
);

export default reduxForm({
  form: 'signIn',
})(SignUpForm);
