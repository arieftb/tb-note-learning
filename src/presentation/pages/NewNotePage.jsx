import { useNavigate } from 'react-router-dom';
import { NoteForm } from '../molecules/NoteForm';
import { SubmitNoteUseCase } from '../../domain/usecases/SubmitNoteUseCase.js';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';
import authRepository from '../../domain/auth/repositories/AuthRepositoryInstance';
import { useTranslation } from '../../context/useTranslation';

const submitNoteUseCase = new SubmitNoteUseCase(noteRepository, authRepository);

export const NewNotePage = () => {
  const navigate = useNavigate();
  const { translate } = useTranslation();

  const handleAddNote = (note) => {
    submitNoteUseCase.execute(note.title, note.body).then(() => {
      navigate('/', { replace: true });
    }).catch((error) => {
      console.error(`${translate('failedAddNote')}:`, error);

        if (error.message === 'NOT_LOGGED_IN') {
          navigate('/login', { replace: true });
        }
      }
    );
  };

  return (
    <div className="container">
      <section className="mb-5">
        <h2 className="mb-3">{translate('addNote')}</h2>
        <NoteForm onSubmit={handleAddNote}/>
      </section>
    </div>
  );
};
