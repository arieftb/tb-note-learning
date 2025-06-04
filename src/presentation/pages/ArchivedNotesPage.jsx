import { useEffect, useState } from 'react';
import { ArchivedNotesLayout } from '../templates/ArchivedNotesTemplate';
import { GetArchiveNotesUseCase } from '../../domain/usecases/GetArchiveNotesUseCase.js';
import { SubmitUnArchiveNoteUseCase } from '../../domain/usecases/SubmitUnArchiveNoteUseCase.js';
import { SearchArchiveNoteUseCase } from '../../domain/usecases/SearchArchiveNoteUseCase.js';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';

const getArchiveNotesUseCase = new GetArchiveNotesUseCase(noteRepository);
const submitUnArchiveNoteUseCase = new SubmitUnArchiveNoteUseCase(noteRepository);
const searchArchivedNotesUseCase = new SearchArchiveNoteUseCase(noteRepository);

export const ArchivedNotesPage = () => {
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadArchivedNotes();
  }, []);

  const loadArchivedNotes = (keyword) => {
    if (keyword) {
      const archivedNotes = searchArchivedNotesUseCase.execute(keyword);
      setArchivedNotes(archivedNotes);
      return;
    }

    const archivedNotes = getArchiveNotesUseCase.execute();
    setArchivedNotes(archivedNotes);
  };

  const handleToggleUnArchive = (id) => {
    submitUnArchiveNoteUseCase.execute(id);
    loadArchivedNotes();
  };

  const handleSearchChange = (keyword) => {
    setSearchQuery(keyword);
    loadArchivedNotes(keyword);
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
