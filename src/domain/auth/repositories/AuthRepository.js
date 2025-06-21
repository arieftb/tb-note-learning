import { register } from '../../../data/auth/infrastructure/AuthRemoteService.js';

export class AuthRepository {
  async register (registration) {
    return register({
      name: registration.name.value,
      email: registration.email.value,
      password: registration.password.value,
    });
  }
}