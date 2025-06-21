export class GetLoginStatusUseCase {
  constructor (authRepository) {
    this.authRepository = authRepository;
  }

  execute () {
    return this.authRepository.getAuthStatus();
  }
}