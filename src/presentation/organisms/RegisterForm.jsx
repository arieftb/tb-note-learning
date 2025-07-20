import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormGroup } from '../molecules/FormGroup';
import { Button } from '../atoms/Button';
import { ErrorMessage } from '../atoms/ErrorMessage';
import { useTranslation } from '../../context/useTranslation';

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
  const { translate } = useTranslation();
  return (
    <div className={className}>
      <ErrorMessage message={generalError}/>
      <form onSubmit={onSubmit}>
        <FormGroup
          id="name"
          label={translate('name')}
          value={name}
          onChange={onNameChange}
          required
        />
        <FormGroup
          id="email"
          label={translate('email')}
          type="email"
          value={email}
          onChange={onEmailChange}
          required
        />
        <FormGroup
          id="password"
          label={translate('password')}
          type="password"
          value={password}
          onChange={onPasswordChange}
          required
          minLength={6}
        >
          <small>{translate('passwordRequirements')}</small>
        </FormGroup>
        <FormGroup
          id="passwordConfirmation"
          label={translate('confirmPassword')}
          type="password"
          value={passwordConfirmation}
          onChange={onPasswordConfirmationChange}
          required
          minLength={6}
        >
          <small>{translate('confirmPasswordHelp')}</small>
        </FormGroup>
        <Button
          type="submit"
          className="register-button"
          disabled={isLoading}
        >
          {isLoading ? translate('registering') : translate('register')}
        </Button>
      </form>
      <p className="login-link">
        {translate('alreadyHaveAccount')} <Link to="/login">{translate('login')}</Link>
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
