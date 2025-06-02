export class GetArchiveNotesUseCase {
  constructor (noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute () {
    return this.noteRepository.getArchivedNotes();
  }
}