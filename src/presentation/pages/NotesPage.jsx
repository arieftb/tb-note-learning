import { useEffect, useState } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadNotes();
  }, []);

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
    loadNotes();
  };

  const handleSearchChange = (keyword) => {
    setSearchQuery(keyword);
    loadNotes(keyword);
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
