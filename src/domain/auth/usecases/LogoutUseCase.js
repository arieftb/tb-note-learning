export class LogoutUseCase {
  constructor (authRepository) {
    this.authRepository = authRepository;
  }

  async execute () {
    await this.authRepository.logout();
  }
}