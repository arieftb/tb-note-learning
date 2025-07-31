import { GetUserUseCase } from '../domain/auth/usecases/GetUserUseCase.js';
import authRepositoryInstance from '../domain/auth/repositories/AuthRepositoryInstance.js';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const getUserUseCase = new GetUserUseCase(authRepositoryInstance);

export function useUser () {
  const [name, setName] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getUserUseCase.execute().then(user => {
      console.log(`user: ${JSON.stringify(user, null, 2)}`);
      setName(user.name);
    }).catch(error => {
      console.error('Failed to get user:', error);
    });
  }, [location]);

  return { name };
}