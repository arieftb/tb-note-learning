export class SubmitUnArchiveNoteUseCase {
  constructor (noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute (id) {
    return this.noteRepository.unarchiveNote(id) != null;
  }
}