import React, { useState } from 'react';
import { Email } from '../../domain/auth/model/Email';
import { Password } from '../../domain/auth/model/Password';
import { Login } from '../../domain/auth/model/Login';
import { LoginUseCase } from '../../domain/auth/usecases/LoginUseCase';
import { AuthRepository } from '../../domain/auth/repositories/AuthRepository';
import { LoginForm } from '../organisms/LoginForm';
import { SuccessMessage } from '../atoms/SuccessMessage';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');
    setIsLoading(true);

    try {
      const emailModel = new Email(email);
      const passwordModel = new Password(password);

      const login = new Login(emailModel, passwordModel);

      const authRepository = new AuthRepository();
      const loginUseCase = new LoginUseCase(authRepository);

      const result = await loginUseCase.execute(login);

      if (!result.error) {
        setSuccessMessage('Login successful!');
        // Redirect to home page after successful login
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setErrors({ general: result.error });
      }
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-page">
      <h2>Login</h2>
      <SuccessMessage message={successMessage}/>
      <LoginForm
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        generalError={errors.general}
      />
    </section>
  );
};