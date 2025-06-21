import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '../molecules/FormGroup';
import { Button } from '../atoms/Button';
import { ErrorMessage } from '../atoms/ErrorMessage';

export const LoginForm = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isLoading,
  generalError,
  className = 'login-form'
}) => {
  return (
    <div className={className}>
      <ErrorMessage message={generalError}/>
      <form onSubmit={onSubmit}>
        <FormGroup
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={onEmailChange}
          required
        />
        <FormGroup
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          required
          minLength={6}
        >
          <small>Password must be at least 6 characters long</small>
        </FormGroup>
        <Button
          type="submit"
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <p className="register-link">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  generalError: PropTypes.string,
  className: PropTypes.string
};

LoginForm.defaultProps = {
  isLoading: false,
  generalError: '',
  className: 'login-form'
};