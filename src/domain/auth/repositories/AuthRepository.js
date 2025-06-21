import { register } from '../../../data/auth/infrastructure/AuthRemoteService.js';

export class AuthRepository {
  async register (registration) {
    return register({
      name: registration.getName(),
      email: registration.getEmail(),
      password: registration.getPassword(),
    });
  }
}