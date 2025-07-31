export class SearchArchiveNoteUseCase {
  constructor (noteRepository, authRepository) {
    this.noteRepository = noteRepository;
    this.authRepository = authRepository;
  }

  async execute (keyword) {
    const isLoggedIn = await this.authRepository.getAuthStatus();

    if (!isLoggedIn) {
      throw new Error('NOT_LOGGED_IN');
    }

    const token = await this.authRepository.getToken();

    return await this.noteRepository.searchArchivedNotes(keyword, token);
  }
}