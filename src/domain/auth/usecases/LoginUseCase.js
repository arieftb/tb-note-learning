export class LoginUseCase {
  constructor (authRepository) {
    this.authRepository = authRepository;
  }

  async execute (
    login
  ) {
    const result = await this.authRepository.login(
      login
    );

    if (!result.error) {
      await this.authRepository.saveToken(result.data.accessToken);
    }

    return result;
  }
}
