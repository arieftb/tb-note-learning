export class SearchArchiveNoteUseCase {
  constructor (noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute (keyword) {
    return this.noteRepository.searchArchivedNotes(keyword);
  }
}