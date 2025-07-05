import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { NotesLayout } from '../templates/NotesTemplate';
import { GetNotesUseCase } from '../../domain/usecases/GetNotesUseCase.js';
import { SubmitArchiveNoteUseCase } from '../../domain/usecases/SubmitArchiveNoteUseCase.js';
import { SearchNotesUseCase } from '../../domain/usecases/SearchNotesUseCase.js';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';
import authRepository from '../../domain/auth/repositories/AuthRepositoryInstance.js';

const getNotesUseCase = new GetNotesUseCase(noteRepository, authRepository);
const submitArchiveNoteUseCase = new SubmitArchiveNoteUseCase(noteRepository);
const searchNotesUseCase = new SearchNotesUseCase(noteRepository, authRepository);

export const NotesPage = () => {
  const navigate = useNavigate();
  const [activeNotes, setActiveNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword') || '';

  useEffect(() => {
    loadNotes(searchQuery);
  }, [searchQuery]);

  const loadNotes = (keyword) => {
    if (keyword) {
      searchNotesUseCase.execute(keyword).then((notes) => {
        setActiveNotes(notes);
      }).catch((error) => {
        console.error('Failed to load notes:', error);
        if (error.message === 'NOT_LOGGED_IN') {
          navigate('/login', { replace: true });
        }
        setActiveNotes([]);
      });
      return;
    }

    getNotesUseCase.execute().then((notes) => {
      setActiveNotes(notes);
    }).catch((error) => {
      console.error('Failed to load notes:', error);
      if (error.message === 'NOT_LOGGED_IN') {
        navigate('/login', { replace: true });
      }
      setActiveNotes([]);
    });
  };

  const handleToggleArchive = (id) => {
    submitArchiveNoteUseCase.execute(id);
    loadNotes(searchQuery);
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
    />
  );
};
