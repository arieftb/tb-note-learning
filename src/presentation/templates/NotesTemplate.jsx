import { NoteSearch } from '../molecules/NoteSearch';
import { NoteForm } from '../molecules/NoteForm';
import { NoteList } from '../organisms/NoteList';
import PropTypes from 'prop-types';

export const NotesLayout = ({
  activeNotes,
  archivedNotes,
  searchQuery,
  onSearchChange,
  onAddNote,
  onDeleteNote,
  onToggleArchive,
  onToggleUnArchive,
}) => {
  return (
    <div className="container">
      <header className="app-header mb-4">
        <h1>TB Note</h1>
        <NoteSearch value={searchQuery} onChange={onSearchChange}/>
      </header>

      <main>
        <section className="mb-5">
          <h2 className="mb-3">Add New Note</h2>
          <NoteForm onSubmit={onAddNote}/>
        </section>

        <section className="mb-5">
          <h2 className="mb-3">Active Notes</h2>
          <div className="notes-grid">
            <NoteList
              notes={activeNotes}
              onDelete={onDeleteNote}
              onToggleArchive={onToggleArchive}
              emptyMessage="Tidak ada catatan aktif"
            />
          </div>
        </section>

        <section className="mb-5">
          <h2 className="mb-3">Archived Notes</h2>
          <div className="notes-grid">
            <NoteList
              notes={archivedNotes}
              onDelete={onDeleteNote}
              onToggleArchive={onToggleUnArchive}
              emptyMessage="Tidak ada catatan terarsip"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

NotesLayout.propTypes = {
  activeNotes: PropTypes.array.isRequired,
  archivedNotes: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onAddNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onToggleArchive: PropTypes.func.isRequired,
  onToggleUnArchive: PropTypes.func.isRequired,
};
