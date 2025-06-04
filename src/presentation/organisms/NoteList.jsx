import { NoteCard } from '../molecules/NoteCard';
import PropTypes from 'prop-types';

export const NoteList = ({ notes, onToggleArchive, emptyMessage = 'Tidak ada catatan' }) => {
  if (notes.length === 0) {
    return <p className="empty-message">{emptyMessage}</p>;
  }

  return (
    <>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onToggleArchive={onToggleArchive}
        />
      ))}
    </>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired
    })
  ).isRequired,
  onToggleArchive: PropTypes.func.isRequired,
  emptyMessage: PropTypes.string
};
