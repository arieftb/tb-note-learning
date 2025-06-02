export class SearchNotesUseCase {
  constructor (noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute (keyword) {
    return this.noteRepository.searchNotes(keyword);
  }
}