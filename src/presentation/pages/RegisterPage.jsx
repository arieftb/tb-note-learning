import React, { useState } from 'react';
import { Name } from '../../domain/auth/model/Name';
import { Email } from '../../domain/auth/model/Email';
import { Password } from '../../domain/auth/model/Password';
import { Registration } from '../../domain/auth/model/Registration';
import { RegisterUseCase } from '../../domain/auth/usecases/RegisterUseCase';
import { AuthRepository } from '../../domain/auth/repositories/AuthRepository';
import { RegisterForm } from '../organisms/RegisterForm';
import { SuccessMessage } from '../atoms/SuccessMessage';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handlePasswordConfirmationChange = (value) => {
    setPasswordConfirmation(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');
    setIsLoading(true);

    // Check if passwords match
    if (password !== passwordConfirmation) {
      setErrors({ general: 'Passwords do not match' });
      setIsLoading(false);
      return;
    }

    try {
      const nameModel = new Name(name);
      const emailModel = new Email(email);
      const passwordModel = new Password(password);

      const registration = new Registration(nameModel, emailModel, passwordModel);

      const authRepository = new AuthRepository();
      const registerUseCase = new RegisterUseCase(authRepository);

      const result = await registerUseCase.execute(registration);

      if (!result.error) {
        setSuccessMessage('Registration successful! You can now log in with your credentials.');
        // Clear form fields after successful registration
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
      }
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="register-page">
      <h2>Register</h2>
      <SuccessMessage message={successMessage}/>
      <RegisterForm
        name={name}
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onPasswordConfirmationChange={handlePasswordConfirmationChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        generalError={errors.general}
      />
    </section>
  );
};
