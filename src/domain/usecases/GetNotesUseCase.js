export class GetNotesUseCase {
  constructor (noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute () {
    return this.noteRepository.getNotes();
  }
}