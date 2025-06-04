import { NoteSearch } from '../molecules/NoteSearch';
import { NoteList } from '../organisms/NoteList';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NotesLayout = ({
  activeNotes,
  searchQuery,
  onSearchChange,
  onToggleArchive,
}) => {
  return (
    <div className="container">
      <section className="mb-4">
        <NoteSearch value={searchQuery} onChange={onSearchChange}/>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Active Notes</h2>
        <div className="notes-grid">
          <NoteList
            notes={activeNotes}
            onToggleArchive={onToggleArchive}
            emptyMessage="Tidak ada catatan aktif"
          />
        </div>
      </section>


      <Link to="/notes/new" className="floating-button">
        <span className="plus-icon">+</span>
      </Link>
    </div>
  );
};

NotesLayout.propTypes = {
  activeNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired
    })
  ).isRequired,
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onToggleArchive: PropTypes.func.isRequired,
};
