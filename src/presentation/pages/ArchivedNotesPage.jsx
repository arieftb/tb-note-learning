import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArchivedNotesLayout } from '../templates/ArchivedNotesTemplate';
import { GetArchiveNotesUseCase } from '../../domain/usecases/GetArchiveNotesUseCase.js';
import { SubmitUnArchiveNoteUseCase } from '../../domain/usecases/SubmitUnArchiveNoteUseCase.js';
import { SearchArchiveNoteUseCase } from '../../domain/usecases/SearchArchiveNoteUseCase.js';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';
import authRepository from '../../domain/auth/repositories/AuthRepositoryInstance';

const getArchiveNotesUseCase = new GetArchiveNotesUseCase(noteRepository, authRepository);
const submitUnArchiveNoteUseCase = new SubmitUnArchiveNoteUseCase(noteRepository);
const searchArchivedNotesUseCase = new SearchArchiveNoteUseCase(noteRepository);

export const ArchivedNotesPage = () => {
  const navigate = useNavigate();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword') || '';

  useEffect(() => {
    loadArchivedNotes(searchQuery);
  }, [searchQuery]);

  const loadArchivedNotes = (keyword) => {
    if (keyword) {
      const archivedNotes = searchArchivedNotesUseCase.execute(keyword);
      setArchivedNotes(archivedNotes);
      return;
    }

    getArchiveNotesUseCase.execute().then((notes) => {
      setArchivedNotes(notes);
    }).catch((error) => {
      console.log('Failed to load archived notes:', error);

      if (error.message === 'NOT_LOGGED_IN') {
        navigate('/login', { replace: true });
      }
    });
  };

  const handleToggleUnArchive = (id) => {
    submitUnArchiveNoteUseCase.execute(id);
    loadArchivedNotes(searchQuery);
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
    />
  );
};
