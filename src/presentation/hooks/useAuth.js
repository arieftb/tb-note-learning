import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GetLoginStatusUseCase } from '../../domain/auth/usecases/GetLoginStatusUseCase';
import authRepositoryInstance from '../../domain/auth/repositories/AuthRepositoryInstance';

const getLoginStatusUseCase = new GetLoginStatusUseCase(authRepositoryInstance);

/**
 * Custom hook to handle authentication logic
 * @returns {Object} Authentication state, loading state, and refetch function
 */
export function useAuth () {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getLoginStatusUseCase.execute().then((result) => {
      console.log('Authentication status:', result);
      setIsAuthenticated(result);
      setIsLoading(false);
    }).catch((error) => {
      console.error('Failed to check authentication status:', error);
      setIsAuthenticated(false);
      setIsLoading(false);
    });
  }, [location]);

  return { isAuthenticated, isLoading };
}
