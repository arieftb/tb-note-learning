import { NoteSearch } from '../molecules/NoteSearch';
import { NoteList } from '../organisms/NoteList';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ArchivedNotesLayout = ({
  archivedNotes,
  searchQuery,
  onSearchChange,
  onToggleUnArchive,
}) => {
  return (
    <div className="container">
      <section className="mb-4">
        <NoteSearch value={searchQuery} onChange={onSearchChange}/>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Archived Notes</h2>
        <div className="notes-grid">
          <NoteList
            notes={archivedNotes}
            onToggleArchive={onToggleUnArchive}
            emptyMessage="Tidak ada catatan terarsip"
          />
        </div>
      </section>

      <Link to="/notes/new" className="floating-button">
        <span className="plus-icon">+</span>
      </Link>
    </div>
  );
};

ArchivedNotesLayout.propTypes = {
  archivedNotes: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onToggleUnArchive: PropTypes.func.isRequired,
};
