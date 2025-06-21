import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '../molecules/FormGroup';
import { Button } from '../atoms/Button';
import { ErrorMessage } from '../atoms/ErrorMessage';

export const RegisterForm = ({
  name,
  email,
  password,
  passwordConfirmation,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onPasswordConfirmationChange,
  onSubmit,
  isLoading,
  generalError,
  className = 'register-form'
}) => {
  return (
    <div className={className}>
      <ErrorMessage message={generalError}/>
      <form onSubmit={onSubmit}>
        <FormGroup
          id="name"
          label="Name"
          value={name}
          onChange={onNameChange}
          required
        />
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
        <FormGroup
          id="passwordConfirmation"
          label="Confirm Password"
          type="password"
          value={passwordConfirmation}
          onChange={onPasswordConfirmationChange}
          required
          minLength={6}
        >
          <small>Please confirm your password</small>
        </FormGroup>
        <Button
          type="submit"
          className="register-button"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </Button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

RegisterForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onPasswordConfirmationChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  generalError: PropTypes.string,
  className: PropTypes.string
};

RegisterForm.defaultProps = {
  isLoading: false,
  generalError: '',
  className: 'register-form'
};
