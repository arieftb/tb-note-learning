import { NoteSearch } from '../molecules/NoteSearch';
import { NoteList } from '../organisms/NoteList';
import { LoadingIndicator } from '../atoms/LoadingIndicator';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../context/useTranslation';

export const ArchivedNotesLayout = ({
  archivedNotes,
  searchQuery,
  onSearchChange,
  onToggleUnArchive,
  isLoading = false,
}) => {
  const { translate } = useTranslation();
  return (
    <div className="container">
      <section className="mb-4">
        <NoteSearch value={searchQuery} onChange={onSearchChange}/>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">{translate('archivedNotes')}</h2>
        <div className="notes-grid">
          {isLoading ? (
            <LoadingIndicator size="medium"/>
          ) : (
            <NoteList
              notes={archivedNotes}
              onToggleArchive={onToggleUnArchive}
              emptyMessage={translate('noArchivedNotes')}
            />
          )}
        </div>
      </section>

      <Link to="/notes/new" className="floating-button">
        <span className="plus-icon">+</span>
      </Link>
    </div>
  );
};

ArchivedNotesLayout.propTypes = {
  archivedNotes: PropTypes.arrayOf(
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
  onToggleUnArchive: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};
