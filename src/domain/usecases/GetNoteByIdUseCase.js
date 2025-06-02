export class GetNoteByIdUseCase {
  constructor (noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute (id) {
    return this.noteRepository.getNoteById(id);
  }
}