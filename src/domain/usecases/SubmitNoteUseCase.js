export class SubmitNoteUseCase {
  constructor (noteRepository, authRepository) {
    this.noteRepository = noteRepository;
    this.authRepository = authRepository;
  }

  async execute (title, body) {
    const isLoggedIn = this.authRepository.getAuthStatus();

    if (!isLoggedIn) {
      throw new Error('NOT_LOGGED_IN');
    }

    const token = await this.authRepository.getToken();

    return await this.noteRepository.addNote(title, body, token);
  }
}