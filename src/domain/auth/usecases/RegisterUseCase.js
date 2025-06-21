export class RegisterUseCase {
  constructor (authRepository) {
    this.authRepository = authRepository;
  }

  execute (registration) {
    return this.authRepository.register(registration);
  }
}