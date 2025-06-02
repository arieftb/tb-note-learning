export class DeleteNoteUseCase {
  constructor (noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute (id) {
    return this.noteRepository.deleteNote(id);
  }
}