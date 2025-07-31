export class GetNotesUseCase {
  constructor (noteRepository, authRepository) {
    this.noteRepository = noteRepository;
    this.authRepository = authRepository;
  }

  async execute () {
    const isLoggedIn = await this.authRepository.getAuthStatus();

    if (!isLoggedIn) {
      throw new Error('NOT_LOGGED_IN');
    }

    const token = await this.authRepository.getToken();

    return this.noteRepository.getNotes(token);
  }
}
