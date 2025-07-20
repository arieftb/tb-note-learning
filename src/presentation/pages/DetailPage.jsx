import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetNoteByIdUseCase } from '../../domain/usecases/GetNoteByIdUseCase';
import { DeleteNoteUseCase } from '../../domain/usecases/DeleteNoteUseCase';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';
import authRepository from '../../domain/auth/repositories/AuthRepositoryInstance';
import { Button } from '../atoms/Button';
import { LoadingIndicator } from '../atoms/LoadingIndicator';
import { useTranslation } from '../../context/useTranslation';

const getNoteByIdUseCase = new GetNoteByIdUseCase(noteRepository, authRepository);
const deleteNoteUseCase = new DeleteNoteUseCase(noteRepository, authRepository);

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { translate } = useTranslation();
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getNoteByIdUseCase.execute(id).then((note) => {
      setNote(note);
      setIsLoading(false);
    }).catch((error) => {
      console.error(`${translate('failedLoadNote')}:`, error);
      if (error.message === 'NOT_LOGGED_IN') {
        navigate('/login', { replace: true });
      }
      setIsLoading(false);
    });
  }, [id, navigate]);

  const handleDeleteNote = () => {
    deleteNoteUseCase.execute(id).then(() => {
      navigate('/', { replace: true });
    }).catch((error) => {
      console.error(`${translate('failedDeleteNote')}:`, error);
      if (error.message === 'NOT_LOGGED_IN') {
        navigate('/login', { replace: true });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="container">
        <div className="note-detail">
          <LoadingIndicator size="large"/>
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="container">
        <h2>{translate('noteNotFound')}</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="note-detail">
        <h2 className="mb-3">{note.title}</h2>
        <small className="text-light mb-3 d-block">
          {new Date(note.createdAt).toLocaleDateString()}
        </small>
        <p className="mb-4">{note.body}</p>
        <div className="note-detail-actions">
          <Button onClick={handleDeleteNote}>
            {translate('delete')}
          </Button>
        </div>
      </div>
    </div>
  );
};
