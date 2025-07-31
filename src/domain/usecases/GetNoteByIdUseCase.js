export class GetNoteByIdUseCase {
  constructor (noteRepository, authRepository) {
    this.noteRepository = noteRepository;
    this.authRepository = authRepository;
  }

  async execute (id) {
    const isLoggedIn = await this.authRepository.getAuthStatus();

    if (!isLoggedIn) {
      throw new Error('NOT_LOGGED_IN');
    }

    const token = await this.authRepository.getToken();

    return this.noteRepository.getNoteById(id, token);
  }
}