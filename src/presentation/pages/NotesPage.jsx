import { useEffect, useState } from 'react';
import { NotesLayout } from '../templates/NotesTemplate';
import { GetArchiveNotesUseCase } from '../../domain/usecases/GetArchiveNotesUseCase.js';
import { GetNotesUseCase } from '../../domain/usecases/GetNotesUseCase.js';
import { SubmitNoteUseCase } from '../../domain/usecases/SubmitNoteUseCase.js';
import { DeleteNoteUseCase } from '../../domain/usecases/DeleteNoteUseCase.js';
import { SubmitArchiveNoteUseCase } from '../../domain/usecases/SubmitArchiveNoteUseCase.js';
import { SubmitUnArchiveNoteUseCase } from '../../domain/usecases/SubmitUnArchiveNoteUseCase.js';
import { SearchNotesUseCase } from '../../domain/usecases/SearchNotesUseCase.js';
import { SearchArchiveNoteUseCase } from '../../domain/usecases/SearchArchiveNoteUseCase.js';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';

const getNotesUseCase = new GetNotesUseCase(noteRepository);
const getArchiveNotesUseCae = new GetArchiveNotesUseCase(noteRepository);
const submitNoteUseCase = new SubmitNoteUseCase(noteRepository);
const deleteNoteUseCase = new DeleteNoteUseCase(noteRepository);
const submitArchiveNoteUseCase = new SubmitArchiveNoteUseCase(noteRepository);
const submitUnArchiveNoteUseCase = new SubmitUnArchiveNoteUseCase(noteRepository);
const searchNotesUseCase = new SearchNotesUseCase(noteRepository);
const searchArchivedNotesUseCase = new SearchArchiveNoteUseCase(noteRepository);

export const NotesPage = () => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = (keyword) => {
    if (keyword) {
      const notes = searchNotesUseCase.execute(keyword);
      const archivedNotes = searchArchivedNotesUseCase.execute(keyword);

      setActiveNotes(notes);
      setArchivedNotes(archivedNotes);
      return;
    }

    const notes = getNotesUseCase.execute();
    const archivedNotes = getArchiveNotesUseCae.execute();

    setActiveNotes(notes);
    setArchivedNotes(archivedNotes);
  };

  const handleAddNote = (note) => {
    submitNoteUseCase.execute(note.title, note.body);
    loadNotes();
  };

  const handleDeleteNote = (id) => {
    deleteNoteUseCase.execute(id);
    loadNotes();
  };

  const handleToggleArchive = (id) => {
    submitArchiveNoteUseCase.execute(id);
    loadNotes();
  };

  const handleToggleUnArchive = (id) => {
    submitUnArchiveNoteUseCase.execute(id);
    loadNotes();
  };

  const handleSearchChange = (keyword) => {
    setSearchQuery(keyword);
    loadNotes(keyword);
  };

  return (
    <NotesLayout
      activeNotes={activeNotes}
      archivedNotes={archivedNotes}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      onAddNote={handleAddNote}
      onDeleteNote={handleDeleteNote}
      onToggleArchive={handleToggleArchive}
      onToggleUnArchive={handleToggleUnArchive}
    />
  );
};
