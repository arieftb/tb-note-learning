import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArchivedNotesLayout } from '../templates/ArchivedNotesTemplate';
import { GetArchiveNotesUseCase } from '../../domain/usecases/GetArchiveNotesUseCase.js';
import { SubmitUnArchiveNoteUseCase } from '../../domain/usecases/SubmitUnArchiveNoteUseCase.js';
import { SearchArchiveNoteUseCase } from '../../domain/usecases/SearchArchiveNoteUseCase.js';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';
import authRepository from '../../domain/auth/repositories/AuthRepositoryInstance';

const getArchiveNotesUseCase = new GetArchiveNotesUseCase(noteRepository, authRepository);
const submitUnArchiveNoteUseCase = new SubmitUnArchiveNoteUseCase(noteRepository, authRepository);
const searchArchivedNotesUseCase = new SearchArchiveNoteUseCase(noteRepository, authRepository);

export const ArchivedNotesPage = () => {
  const navigate = useNavigate();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword') || '';

  useEffect(() => {
    loadArchivedNotes(searchQuery);
  }, [searchQuery]);

  const loadArchivedNotes = (keyword) => {
    setIsLoading(true);

    if (keyword) {
      searchArchivedNotesUseCase.execute(keyword).then((notes) => {
        setArchivedNotes(notes);
        setIsLoading(false);
      }).catch((error) => {
        console.error('Failed to load archived notes:', error);
        if (error.message === 'NOT_LOGGED_IN') {
          navigate('/login', { replace: true });
        }
        setArchivedNotes([]);
        setIsLoading(false);
      });
      return;
    }

    getArchiveNotesUseCase.execute().then((notes) => {
      setArchivedNotes(notes);
      setIsLoading(false);
    }).catch((error) => {
      console.log('Failed to load archived notes:', error);
      setArchivedNotes([]);
      setIsLoading(false);

      if (error.message === 'NOT_LOGGED_IN') {
        navigate('/login', { replace: true });
      }
    });
  };

  const handleToggleUnArchive = (id) => {
    submitUnArchiveNoteUseCase.execute(id).then(() => {
      loadArchivedNotes(searchQuery);
    }).catch((error) => {
      console.error('Failed to unarchive note:', error);
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
    <ArchivedNotesLayout
      archivedNotes={archivedNotes}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      onToggleUnArchive={handleToggleUnArchive}
      isLoading={isLoading}
    />
  );
};
