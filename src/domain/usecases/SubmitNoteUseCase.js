export class SubmitNoteUseCase {
  constructor (noteRepository) {
    this.noteRepository = noteRepository;
  }
  execute (title, body) {
    return this.noteRepository.addNote(title, body);
  }
}