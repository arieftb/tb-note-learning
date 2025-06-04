import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NotesLayout } from '../templates/NotesTemplate';
import { GetNotesUseCase } from '../../domain/usecases/GetNotesUseCase.js';
import { SubmitArchiveNoteUseCase } from '../../domain/usecases/SubmitArchiveNoteUseCase.js';
import { SearchNotesUseCase } from '../../domain/usecases/SearchNotesUseCase.js';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';

const getNotesUseCase = new GetNotesUseCase(noteRepository);
const submitArchiveNoteUseCase = new SubmitArchiveNoteUseCase(noteRepository);
const searchNotesUseCase = new SearchNotesUseCase(noteRepository);

export const NotesPage = () => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword') || '';

  useEffect(() => {
    loadNotes(searchQuery);
  }, [searchQuery]);

  const loadNotes = (keyword) => {
    if (keyword) {
      const notes = searchNotesUseCase.execute(keyword);
      setActiveNotes(notes);
      return;
    }

    const notes = getNotesUseCase.execute();
    setActiveNotes(notes);
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
