import { login, register } from '../../../data/auth/infrastructure/AuthRemoteService.js';
import { getToken, saveToken } from '../../../data/auth/persistence/AuthLocalService.js';

export class AuthRepository {
  async register (registration) {
    return register({
      name: registration.getName(),
      email: registration.getEmail(),
      password: registration.getPassword(),
    });
  }

  async login (loginParam) {
    return login({
      email: loginParam.getEmail(),
      password: loginParam.getPassword(),
    });
  }

  async getAuthStatus () {
    return await getToken() !== '';
  }

  async saveToken (token) {
    return saveToken(token);
  }
}