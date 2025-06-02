export class SubmitArchiveNoteUseCase {
  constructor (noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute (id) {
    return this.noteRepository.archiveNote(id) != null;
  }
}