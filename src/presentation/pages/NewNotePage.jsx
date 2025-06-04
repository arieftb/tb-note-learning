import { useNavigate } from 'react-router-dom';
import { NoteForm } from '../molecules/NoteForm';
import { SubmitNoteUseCase } from '../../domain/usecases/SubmitNoteUseCase.js';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';

const submitNoteUseCase = new SubmitNoteUseCase(noteRepository);

export const NewNotePage = () => {
  const navigate = useNavigate();

  const handleAddNote = (note) => {
    submitNoteUseCase.execute(note.title, note.body);
    navigate('/');
  };

  return (
    <div className="container">
      <section className="mb-5">
        <h2 className="mb-3">Add New Note</h2>
        <NoteForm onSubmit={handleAddNote}/>
      </section>
    </div>
  );
};