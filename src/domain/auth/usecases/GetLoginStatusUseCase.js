export class GetLoginStatusUseCase {
  constructor (authRepository) {
    this.authRepository = authRepository;
  }

  async execute () {
    return await this.authRepository.getAuthStatus();
  }
}