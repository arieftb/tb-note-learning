import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { NotesLayout } from '../templates/NotesTemplate';
import { GetNotesUseCase } from '../../domain/usecases/GetNotesUseCase.js';
import { SubmitArchiveNoteUseCase } from '../../domain/usecases/SubmitArchiveNoteUseCase.js';
import { SearchNotesUseCase } from '../../domain/usecases/SearchNotesUseCase.js';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';
import authRepository from '../../domain/auth/repositories/AuthRepositoryInstance.js';
import { useTranslation } from '../../context/useTranslation';

const getNotesUseCase = new GetNotesUseCase(noteRepository, authRepository);
const submitArchiveNoteUseCase = new SubmitArchiveNoteUseCase(noteRepository, authRepository);
const searchNotesUseCase = new SearchNotesUseCase(noteRepository, authRepository);

export const NotesPage = () => {
  const navigate = useNavigate();
  const { translate } = useTranslation();
  const [activeNotes, setActiveNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword') || '';

  useEffect(() => {
    loadNotes(searchQuery);
  }, [searchQuery]);

  const loadNotes = (keyword) => {
    setIsLoading(true);

    if (keyword) {
      searchNotesUseCase.execute(keyword).then((notes) => {
        setActiveNotes(notes);
        setIsLoading(false);
      }).catch((error) => {
        console.error(`${translate('failedLoadNotes')}:`, error);
        if (error.message === 'NOT_LOGGED_IN') {
          navigate('/login', { replace: true });
        }
        setActiveNotes([]);
        setIsLoading(false);
      });
      return;
    }

    getNotesUseCase.execute().then((notes) => {
      setActiveNotes(notes);
      setIsLoading(false);
    }).catch((error) => {
      console.error(`${translate('failedLoadNotes')}:`, error);
      if (error.message === 'NOT_LOGGED_IN') {
        navigate('/login', { replace: true });
      }
      setActiveNotes([]);
      setIsLoading(false);
    });
  };

  const handleToggleArchive = (id) => {
    submitArchiveNoteUseCase.execute(id).then(() => {
      loadNotes(searchQuery);
    }).catch((error) => {
      console.error(`${translate('failedArchiveNote')}:`, error);
      if (error.message === 'NOT_LOGGED_IN') {
        navigate('/login', { replace: true });
      }
    });
  };

  const handleSearchChange = (keyword) => {
    if (keyword) {
      setSearchParams({ keyword });
    } else {
      setSearchParams({});
    }
  };

  return (
    <NotesLayout
      activeNotes={activeNotes}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      onToggleArchive={handleToggleArchive}
      isLoading={isLoading}
    />
  );
};
