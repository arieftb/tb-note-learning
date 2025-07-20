import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormGroup } from '../molecules/FormGroup';
import { Button } from '../atoms/Button';
import { ErrorMessage } from '../atoms/ErrorMessage';
import { useTranslation } from '../../context/useTranslation';

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
  const { translate } = useTranslation();
  return (
    <div className={className}>
      <ErrorMessage message={generalError}/>
      <form onSubmit={onSubmit}>
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
        <Button
          type="submit"
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? translate('loggingIn') : translate('login')}
        </Button>
      </form>
      <p className="register-link">
        {translate('dontHaveAccount')} <Link to="/register">{translate('register')}</Link>
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
